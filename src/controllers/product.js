const sequelize = require("../db");
const { Product, Category, Review } = sequelize.models;

const createProduct = async (req, res) => {
  const {
    title,
    description,
    image,
    price,
    stock,
    sales,
    discount,
    categories,
  } = req.body;

  try {
    const categoriesDB = await Category.findAll({
      where: { name: categories },
    });
    if (categoriesDB.length === 0)
      return res
        .status(400)
        .json({ errorMessage: "One provided category is not validate" });

    let newProduct = await Product.create({
      title,
      description,
      image,
      price,
      stock,
      sales,
      discount,
    });

    await newProduct.addCategory(categoriesDB);

    const newCategory = categoriesDB.map((category) => category.name);
    newProduct = { ...newProduct.dataValues, categories: newCategory };

    return res.json(newProduct);
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
};

const getAllProducts = async () => {
  try {
    return await Product.findAll({
      include: [{ model: Category, attributes: ["name"] }, Review],
    });
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
