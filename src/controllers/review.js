const router = require("express").Router();
const sequelize = require("../db");
const { Review, Product, User, Transaction } = sequelize.models;
const { Op } = require("sequelize");
const { getUserTransactionsComplete } = require("./transaction");
const createReview = async (userId, title, score, comment) => {
  try {
    return await Review.create({
      userId,
      title,
      score,
      comment,
    });
  } catch (error) {
    return error.message;
  }
};
const mostVoted = async (number) => {
  let products = await Product.findAll({
    include: Review,
  });
  return products.filter((product) => {
    let prom = 0;
    if (product.Reviews?.length) {
      prom =
        product.Reviews?.reduce((acc, { score }) => (acc += score), 0) /
        product.Reviews?.length;
    }
    return prom >= number ? true : false;
  });
};
const userBuyProduct = async (userId, productId) => {
  let transactions = await getUserTransactionsComplete(userId);
  let productBuyed = transactions.filter((t) =>
    t.cart.productsInCart.find(({ product }) => product.id === productId)
  );
  return productBuyed.length > 0;
};
module.exports = {
  createReview,
  mostVoted,
  userBuyProduct,
};
