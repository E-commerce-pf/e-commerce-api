const router = require("express").Router();
const sequelize = require('../db');
const { Review, Product} = sequelize.models;
const { Op } = require('sequelize');
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
const mostVoted= async (number)=>{
    let products=await Product.findAll({
        include: Review
    })
    return products.filter(product=>{
        let prom=0;
        if(product.Reviews?.length){
            prom=product.Reviews?.reduce((acc, { score }) => acc += score, 0) / product.Reviews?.length;
        }
        return prom>=number?true:false;
    });
}
module.exports = {
    createReview,
    mostVoted,
  };
