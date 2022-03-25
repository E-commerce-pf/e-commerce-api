const sequelize = require("../db");
const { User, Cart, ProductInCart, Transaction } = sequelize.models;
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

routerUsers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id, { include: [{ model: Transaction }] });

  if (user) {
    const cart = await Cart.findByPk(user.cartId, {
      include: [{ model: ProductInCart }],
    });
    if (cart) {
      res.json({
        ...user.toJSON(),
        cartId: cart.toJSON(),
      });
    } else {
      res.status(404).json({
        error: "No existe el carrito",
      });
    }
  } else {
    res.status(404).json({ error: "No existe el usuario" });
  }
});

module.exports = routerUsers;
