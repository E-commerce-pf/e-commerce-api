const router = require("express").Router();
const { createProduct, getAllProducts } = require("../controllers/product");
const { verifyUserToken } = require("../controllers/verifyToken");
const sequelize = require("../db");
const { Product, Category, Review } = sequelize.models;

let statusCode = 500

router.post("/", createProduct);

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if(id==='all'){
      const products = await getAllProducts();
      let totalProducts = Object.keys(products).length
      statusCode= 404
      if(totalProducts) return res.status(200).json({total:totalProducts, products});
      else throw new Error('No products found!')
    }
    statusCode = 400;
    if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error('Invalid transaction ID format')

    const product = await Product.findOne({
      where: {
        id,
      },
      include: [{ model: Category, attributes: ["name"]},Review],
    });

    statusCode = 404;
    if (!product) throw new Error("Product not found");
    else return res.json(product);
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
});

module.exports = router;
