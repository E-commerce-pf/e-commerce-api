const router = require("express").Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/product");
const { verifyUserToken } = require("../controllers/verifyToken");

router.post("/", verifyUserToken, createProduct);

router.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    allProducts.length > 0
      ? res.json(allProducts)
      : res.status(404).json({ msg: "The are not products" });
  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    return res.json(product);
  } catch (error) {
    return res.status(401).json({ message: "There are not products" });
  }
});

module.exports = router;
