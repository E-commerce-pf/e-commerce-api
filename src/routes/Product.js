const router = require("express").Router();
const { createProduct, getAllProducts } = require("../controllers/product");
const { verifyUserToken } = require("../controllers/verifyToken");
const sequelize = require("../db");
const { Product, Category, Review } = sequelize.models;

router.post("/", verifyUserToken, createProduct);

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    return res.json(products);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

let statusCode = 500;
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    statusCode = 400;
    if (
      !/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(
        id
      )
    )
      throw new Error("Invalid ID format");

    const product = await Product.findOne({
      where: {
        id,
      },
      include: [{ model: Category, attributes: ["name"], Review }],
    });

    statusCode = 404;
    if (!product) throw new Error("Product not found");
    else return res.json(product);
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
});

module.exports = router;
