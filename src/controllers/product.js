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

const getProducts = async (id) => {
  try {
    if (id === "All") {
      const products = Product.findAll();
      let totalProducts = Object.keys(products).length;
      if (totalProducts) return res.json({ totalProducts, ...products });
      else throw new Error("No products have been added yet!");
    }
    if (
      !/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(
        id
      )
    )
      return res.status(400).json({ errormsg: "Invalid ID format" });

    const product = await Product.findByPk(id);

    if (!product)
      return res.status(404).json({ errormsg: "Product not found" });
    else return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
};
