const routerCart = require("express").Router();
const sequelize = require("../db");
const { Cart, ProductInCart, Product } = sequelize.models;

routerCart.get("/", async (req, res) => {
  res.json(await Cart.findAll());
});

routerCart.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(
    await Cart.findByPk(id, {
      include: [{ model: ProductInCart }],
    })
  );
});

routerCart.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity, productId } = req.body;

  const cart = await Cart.findByPk(id, {
    include: [ProductInCart, { include: Product }],
  });

  res.json(cart);
});

module.exports = routerCart;
