const sendEmailRouter = require("express").Router();
const email = require("../controllers/SendEmail");

sendEmailRouter.post("/", email.sendEmail);

module.exports = sendEmailRouter;
