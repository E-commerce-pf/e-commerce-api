const newletterRoute = require("express").Router();
const sequelize = require("../db");
const { Newletter } = sequelize.models;

newletterRoute.get("/", async (req, res) => {
  res.json(await Newletter.findAll());
});

newletterRoute.post("/", async (req, res) => {
  const { email } = req.body;

  const findEmail = await Newletter.findOne({ where: { email } });
  if (findEmail) {
    return res.status(400).json({
      error: "Email already exists",
    });
  }

  const newletter = await Newletter.create({ email });
  res.json(newletter);
});

newletterRoute.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const newletter = await Newletter.destroy({
    where: {
      id,
    },
  });
  res.json(newletter);
});

module.exports = newletterRoute;
