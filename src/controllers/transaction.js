const router = require("express").Router();
const sequelize = require('../db');
const { User,Product} = sequelize.models;
const createTransaction= async (product,isSold)=>
{    
    try {
        return await Transaction.create({
            product,
            isSell:false,
            state: "process",
        });
    } catch (error) {
        return error.message
    }
}
module.exports = {
    createTransaction,
  };
