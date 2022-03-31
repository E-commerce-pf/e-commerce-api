const router = require("express").Router();
const sequelize = require("../db");
const { Product, Category, Review } = sequelize.models;
const { verifyAdminToken} = require("../controllers/verifyToken");
const { createProduct } = require("../controllers/product");


router.post("/", verifyAdminToken, createProduct);

router.get("/", async (req, res) => {
  const result = await Product.findAll( {include: [Category]} )
  .then(res => res.map(item => {
    let producto = item.dataValues
    return {
      ...producto,
      image : producto.image.split('*_*')
    }
  }))
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    if (!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) return res.status(400).json({error: "Invalid transaction ID format"});

    const product = await Product.findOne({
      where: {
        id,
        disable: false
      },
      include: [{ model: Category, attributes: ["name"] }, Review],
    });

    if (!product) return res.status(400).json( {error : "Product not found"} );

    product.dataValues.image = product.dataValues.image.split('*_*');
    return res.json(product);
  } catch (err) {
    return res.status(400).json( {error: err.message } );
  }
});

module.exports = router;
