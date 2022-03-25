const paymentRouter = require("express").Router();
const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;
const Capture = require("../utils/templateCapture");
const sequelize = require("../db");
const {
  updateTransaction,
} = require("../controllers/transaction");
const {
  resetUserCart
} = require("../controllers/cart");
const {
  updateAllStock
} = require("../controllers/product");
//const baseUrl = https://everyones-store-api.herokuapp.com;
const baseUrl = "http://localhost:3001";

paymentRouter.post("/create", (req, res) => {
  try {
    const { description, value, userId } = req.body;

    if (!description && !value) {
      return res.status(404).json({ error: "Faltan parametros en body!" });
    }

    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: value,
          },
          description: description,
        },
      ],
      application_context: {
        brand_name: "Everyones Store",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `${baseUrl}/api/payment/capture`,
        cancel_url: `${baseUrl}/api/payment/cancel`,
      },
    };

    axios
      .post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      })
      .then(async (resp) => {
        let transactionDetail=await axios.post(`${baseUrl}/api/transaction/${userId}`);
        if(transactionDetail.data.error)
        return res.status(500).send({error:transactionDetail.data.error});
        transactionDetail=transactionDetail.data.transaction;
        res.json({transactionDetail,...resp.data});
      });
  } catch (error) {
    return res.status(400).send({error:transactionDetail.data.error})
  }
});

paymentRouter.get("/capture", (req, res) => {
  try {
    const { token, PayerID } = req.query;
    const {transactionId, userId} = req.body;
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
        console.log(resp.data.payer.email_address);
        await updateAllStock(transactionId);
        await updateTransaction("complete", transactionId);
        await resetUserCart(userId);
      })
      .then(()=>res.send(Capture("Pago Realizado!"))).catch((error)=>res.status(400).send({error:error.message}));
    } catch (error) {
      return res.status(400).send({error:error.message})
    }
});

paymentRouter.get("/cancel", async(req, res) => {
  const {transactionId}=req.query;
  await updateTransaction("canceled", transactionId);
  res.send(Capture("No se relizo el pago!"));
});

module.exports = paymentRouter;
