const router = require("express").Router();
const { createProduct } = require("../controllers/product");
const { verifyUserToken } = require("../controllers/verifyToken");
const sequelize = require("../db");
const { Product, Category, Review } = sequelize.models;

router.post("/", verifyUserToken, createProduct);

let statusCode = 500;
router.get("/find/:id", async (req, res) => {
  let { id } = req.params;

  try {
    if (id === "all") {
      const products = await Product.findAll({
        include: [{ model: Category, attributes: ["name"], Review }],
      });
      let totalProducts = Object.keys(products).length;
      if (totalProducts) return res.json({ totalProducts, ...products });
      else throw new Error("No products have been added yet!");
    }
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
