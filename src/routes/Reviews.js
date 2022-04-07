const sequelize = require("../db");
const { Product, Review } = sequelize.models;
const routerReviews = require("express").Router();

routerReviews.get("/products/score", (req, res) => {
  const { mayorQue } = req.query;

  Product.findAll({
    include: Review,
    where: {
      disable : false
    }
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
  res.json(
    await Review.findAll({
      where: { userId: req.params.userId },
      include: Product,
    })
  );
});

routerReviews.post("/", async (req, res) => {
  const { score, comment, ProductId, userId } = req.body;

  const review = await Review.findOne({
    where: {
      userId,
      ProductId,
    },
  });

  if (review) {
    await review.update({ score, comment });
    res.json(review);
  } else {
    const newReview = await Review.create({
      score,
      comment,
      userId,
      ProductId,
    });

    res.json(newReview);
  }
});

routerReviews.get("/", async (req, res) => {
  res.json(await Review.findAll());
});

module.exports = routerReviews;
