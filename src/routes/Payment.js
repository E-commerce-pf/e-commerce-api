const paymentRouter = require("express").Router();
const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;
const Capture = require("../utils/templateCapture");
const sequelize = require("../db");
const { updateTransaction } = require("../controllers/transaction");
const { resetUserCart } = require("../controllers/cart");
const { updateAllStock } = require("../controllers/product");

const baseUrl = "https://everyones-store-api.herokuapp.com";
//const baseUrl = "http://localhost:3001";

paymentRouter.post("/create", async (req, res) => {
  const { description, userId } = req.body;

  if (!description && !userId) {
    return res.status(404).json({ error: "Faltan parametros en body!" });
  }

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
    .then((resp) => {
      res.json(resp.data);
    });
});

paymentRouter.get("/capture/:transactionId/:userId", (req, res) => {
  try {
    const { token, PayerID } = req.query;
    const { transactionId, userId } = req.params;

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
        await resetUserCart(userId);
      })
      .then(() => res.send(Capture("Pago Realizado!")))
      .catch((error) => res.status(400).send({ error: error.message }));
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

paymentRouter.get("/cancel/:transactionId", async (req, res) => {
  const { transactionId } = req.query;
  await updateTransaction("canceled", transactionId);
  res.send(Capture("No se relizo el pago!"));
});

module.exports = paymentRouter;
