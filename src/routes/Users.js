const sequelize = require("../db");
const { User, Cart, ProductInCart, Transaction, Favorite, Product } =
  sequelize.models;
const routerUsers = require("express").Router();
const { encrypt } = require("../controllers/encrypt");

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
  let user = await User.findByPk(id, {
    include: [{ model: Transaction }, { model: Favorite, include: Product }],
  }).catch((e) => console.log(e.message));
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

routerUsers.put("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  const { password } = req.body;

  if (user) {
    if (password) {
      const newPassword = encrypt(password);
      await user.update({
        password: newPassword,
        loginWithSocial: false,
      });
    } else {
      await user.update({
        ...req.body,
      });
    }
    res.json({
      userId: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      country: user.country,
      city: user.city,
      address: user.address,
    });
  } else {
    res.status(404).json({ error: "No existe el usuario" });
  }
});

module.exports = routerUsers;
