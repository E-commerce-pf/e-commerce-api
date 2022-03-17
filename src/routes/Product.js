const router = require("express").Router();
<<<<<<< HEAD
const {
  createProduct,
  getProducts,
  
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

router.get("/find/:id", async (req, res) => {
 
    const { id } = req.params;
    const products = await getProducts(id);
    return res.json(products);
  
});

module.exports = router;