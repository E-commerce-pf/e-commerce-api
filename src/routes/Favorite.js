const sequelize = require("../db");
const router = require("express").Router();
const { Product, Favorite, User } = sequelize.models;
const { isUUID } = require("../controllers/isUUID");
const { getFavorites } = require("../controllers/favorite");

router.post("/", async (req, res) => {
  const { userId, productId } = req.body;
  try {
    if (!isUUID(userId) || !isUUID(productId))
      return res.status(400).json({ error: "Id not valid" });
    let userFavorites = await getFavorites(userId);
    if (userFavorites.find((f) => f.ProductId === productId))
      return res
        .status(400)
        .json({ error: "The product had already been added to favorites" });
    let newFavorite = await Favorite.create();
    let product = await Product.findByPk(productId);
    let user = await User.findByPk(userId);
    await user.addFavorite(newFavorite);
    await product.addFavorite(newFavorite);
    return res.status(200).send({ status: "Product added to favorites" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});
router.delete("/", async (req, res) => {
  const { favoriteId, userId } = req.body;
  try {
    if (!isUUID(userId) || !isUUID(favoriteId))
      return res.status(400).json({ error: "Id not valid" });
    let userFavorites = await getFavorites(userId);
    if (!userFavorites.find((f) => f.id === favoriteId))
      return res.status(400).json({ error: "The favorite product not exist" });
    await Favorite.destroy({ where: { id: favoriteId } });
    return res.status(200).send({ status: "Product removed to favorites" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    if (!isUUID(userId)) return res.status(400).json({ error: "Id not valid" });
    let userFavorites = await getFavorites(userId);
    userFavorites = userFavorites.map((f) => {
      return { id: f.id, product: f.Product };
    });
    return res.status(200).send({ favorites: userFavorites });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});
module.exports = router;
