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

    if(totalPrice === 0 ) return res.status(400).json({error : "No puede ser 0" })

    console.log(totalPrice)
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
        return_url: `${baseUrl}/api/payment/capture/${id}/${userId}`,
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
      .then((resp) => res.json(resp.data))
      console.log(totalPrice);
  } catch ({message}) {
    return res.status(500).json({ error: message });
  }
});

paymentRouter.get("/capture/:transactionId/:userId", async (req, res) => {
  try {
    const { transactionId, userId } = req.params;
    const { token } = req.query;

    axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
        {},
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
        }
      )
      .then(async (resp) => {
        await resetUserCart(userId);
        await updateTransaction("complete", transactionId);
        await updateAllStock(transactionId);
        return res.send( Capture("Success") ) 
      })
      .catch((error) => {
        console.log(error)
        res.status(400).send({ error: error.message })
      });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

paymentRouter.get("/cancel/:transactionId", async (req, res) => {
  const { location } = req.query;
  const { transactionId } = req.params;
  try {
    await updateTransaction("canceled", transactionId);
    if(location) return res.status(200).json({success: 'Order canceled successfully'})
    else return res.send(cancelTemplate("Order cancel") );
  } catch (error) {
    return res.status(error.status).json( {error: error.message} )
  }
});

module.exports = paymentRouter;
