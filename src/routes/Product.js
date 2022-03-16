const router = require("express").Router();
const { createProduct, getAllProducts } = require("../controllers/product");

router.post("/", createProduct);

router.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    return res.json(allProducts);
  } catch (error) {
    return res.status(401).json({ message: "There are not products" });
  }
});

module.exports = router;
