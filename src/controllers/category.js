const sequelise = require("../db");
const { Category, Product } = sequelise.models;

const getAllCategories = async () => {
  try {
    let result = [] 
    await Category.findAll({
      include : Product,
      where:{
        disable : false
      }
    }) 
    .then(res => {
      res.map(item => {
        result.push({id :item.dataValues.id, name : item.dataValues.name, products: item.dataValues.Products.length})
      })
    })
    return result 
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllCategories,
};
