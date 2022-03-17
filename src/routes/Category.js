const router = require("express").Router();
const { getAllCategories } = require("../controllers/category");

router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
});

module.exports = router;
