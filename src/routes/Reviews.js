const sequelize = require("../db");
const { Product, Review } = sequelize.models;
const routerReviews = require("express").Router();

routerReviews.get("/products/score", (req, res) => {
  const { mayorQue } = req.query;

  Product.findAll({
    include: Review,
  })
    .then((data) => {
      return JSON.stringify(data);
    })
    .then((data) => {
      const dataOb = JSON.parse(data);
      const products = dataOb.filter((data) => data.Reviews.length !== 0);
      if (products.length === 0) {
        res.json([]);
      } else {
        const productsScore = products.map((product) => {
          const { Reviews, ...productNotReview } = product;
          return {
            ...productNotReview,
            score:
              Reviews.reduce((acum, curr) => acum + curr.score, 0) /
              Reviews.length,
          };
        });

        let valueFilter = Number(mayorQue);

        if (!valueFilter) {
          res.json(productsScore);
        } else {
          res.json(
            productsScore.filter((product) => product.score >= valueFilter)
          );
        }
      }
    });
});

routerReviews.get("/:userId", async (req, res) => {
  res.json(await Review.findAll({ where: { userId: req.params.userId }, include: Product }));
});

module.exports = routerReviews;
