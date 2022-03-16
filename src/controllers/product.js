const { Sequelize } = require("sequelize");
const { Product, Category, Review } = require("../db.js");

const createProduct = async (req, res) => {
  const {
    userId,
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

    let newProduct = await Product.create({
      userId,
      title,
      description,
      image,
      price,
      stock,
      sales,
      discount,
    });

    await newProduct.addCategory(categoriesDB);

    const newCategory = categoriesDB.map((category) => category.dataValues);
    newProduct = { ...newProduct.dataValues, categories: newCategory };

    return res.json(newProduct);
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
};

const getAllProducts = async () => {
  try {
    return await Product.findAll({
      include: [{ model: Category }, Review],
    });
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
