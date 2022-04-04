const paymentRouter = require("express").Router();
const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;
const Capture = require("../utils/templateCapture");
const sequelize = require("../db");
const { Transaction } = sequelize.models;
const { updateTransaction, saveTokenBuy } = require("../controllers/transaction");
const { resetUserCart } = require("../controllers/cart");
const { updateAllStock } = require("../controllers/product");
const cancelTemplate = require("../utils/templateCancelPayment");

// const baseUrl = "https://everyones-store-api.herokuapp.com";
const baseUrl = "http://localhost:3001";

paymentRouter.post("/create", async (req, res) => {
  const { description, userId } = req.body;
  
  if (!description && !userId) {
    return res.status(404).json({ error: "Faltan parametros en body!" });
  }
  try {
    const transactionDetail = await axios.post(
      `${baseUrl}/api/transaction/${userId}`
    );
    if (transactionDetail.data.error) {
      return res.status(404).json({ error: transactionDetail.data.error });
    }
    const { id } = transactionDetail.data.transaction;
    const { totalPrice } = transactionDetail.data.transaction.cart;

    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: totalPrice,
          },
          description: description,
        },
      ],
      application_context: {
        brand_name: "Everyones Store",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        //return_url: `${baseUrl}/api/payment/capture/${id}/${userId}`,
        return_url: `${baseUrl}/api/payment/saveToken/${id}/${userId}`,
        cancel_url: `${baseUrl}/api/payment/cancel/${id}`,
      },
    };
    axios
      .post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      })
      .then((resp) => {
        return res.json(resp.data)
      })

  } catch ({message}) {
    return res.status(500).json({ error: message });
  }
});

paymentRouter.get("/saveToken/:transactionId/:userId",async (req,res)=>{
  const { token } = req.query;
  const { transactionId,userId} = req.params;
  try {
    await saveTokenBuy(token,transactionId);
    await resetUserCart(userId);
    return res.status(200).send(Capture("Payment in process"));
  } catch ({message}) {
    console.log(message)
    return res.status(500).json({ error: message });
  }
})

paymentRouter.get("/capture/:transactionId", async (req, res) => {
  try {
    const { transactionId } = req.params;
    let {token}=await Transaction.findByPk(transactionId);
    axios
      .post(
        `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
        {},
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
        }
      )
      .then(async (resp) => {
        await updateAllStock(transactionId);
        await updateTransaction("complete", transactionId);
      })
      .then(() => res.status(200).send({status:"Transaction completed"}))
      .catch((error) => res.status(400).send({ error: error.message }));
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

paymentRouter.get("/cancel/:transactionId", async (req, res) => {
  const { transactionId } = req.params;
  await updateTransaction("canceled", transactionId);
  res.send(cancelTemplate("Payment not made"));
});

module.exports = paymentRouter;
