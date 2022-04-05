const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = process.env;

const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });
};

const sendEmail = (req, res) => {
  const { email, template, name } = req.body;
  if (!email && !template) {
    return res.status(404).json({ error: "Unkanown email or template!" });
  }

  const transporter = createTransporter();

  transporter.sendMail(
    {
      from: EMAIL,
      to: email,
      subject: `Hola ${name}`,
      html: template,
    },
    (err, info) => {
      if (err) {
        return res.status(404).json({ error: err.message });
      }
      return res.json({ success: "Done! Please check your email" });
    }
  );
};

module.exports = {
  sendEmail,
};
