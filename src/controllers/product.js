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
      include: [Category, Review],
    });
  } catch (error) {
    return error.message;
  }
};

const getProductById = async (id) => {
  try {
    if (
      !/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(
        id
      )
    )
      return res.status(400).send({ error: "Invalid ID format" });

    const product = await Product.findOne({
      where: {
        id,
      },
    });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ error: "Product not found" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
