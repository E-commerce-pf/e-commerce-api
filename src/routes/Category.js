const router = require("express").Router();
const { getAllCategories } = require("../controllers/category");
const sequelize = require("../db");
const { Category, Product } = sequelize.models;

router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
});

//Traer todos los productos de una categoría en especifico
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ error: "Id not provided" });
  try {
    let result = await Category.findOne({
      include: Product,
      where: {
        id,
      },
    });
    if (!result) return res.status(400).json({ error: "Category not found" });
    return res.status(200).json({ products: result.dataValues.Products });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
