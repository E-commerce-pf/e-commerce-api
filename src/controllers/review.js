const router = require("express").Router();
const sequelize = require('../db');
const { Review} = sequelize.models;
const createReview= async (userId,score,comment)=>
{    
    try {
        return await Review.create({
            userId,
            score,
            comment
          });
    } catch (error) {
        return error.message
    }
}
module.exports = {
    createReview,
  };
