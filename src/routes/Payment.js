const paymentRouter = require("express").Router();
const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } = process.env;
const Capture = require("../utils/templateCapture");

//const baseUrl = https://everyones-store-api.herokuapp.com;
const baseUrl = "http://localhost:3001";

paymentRouter.post("/create", (req, res) => {
  const { description, value } = req.body;

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
    .then((resp) => {
      res.json(resp.data);
    });
});

paymentRouter.get("/capture", (req, res) => {
  const { token, PayerID } = req.query;

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
    .then((resp) => {
      console.log(resp.data.payer.email_address);
    });

  return res.send(Capture("Pago Realizado!"));
});

paymentRouter.get("/cancel", (req, res) => {
  res.send(Capture("No se relizo el pago!"));
});

module.exports = paymentRouter;
