const sequelise = require("../db");
const { Category } = sequelise.models;

const getAllCategories = async () => {
  try {
    return await Category.findAll();
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllCategories,
};
