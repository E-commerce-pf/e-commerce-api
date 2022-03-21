const sequelize = require("../db");
const { User } = sequelize.models;
const routerUsers = require("express").Router();

routerUsers.get("/", (req, res) => {
  User.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ error: "Hubo un error" });
    });
});

module.exports = routerUsers;
