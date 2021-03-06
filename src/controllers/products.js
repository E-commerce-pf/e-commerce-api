const router = require("express").Router();
const sequelize = require('../db');
const { User,Product} = sequelize.models;
const getProductOwner= async (product)=>
{    
    try {
        return await User.findOne({
            where: {
                id: product.Users
            }
        });
    } catch (error) {
        return error.message
    }
}
module.exports = {
    getProductOwner,
  };
