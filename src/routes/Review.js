const router = require('express').Router();
const sequelize = require('../db');
const { User, Review, Product, Transaction } = sequelize.models;


router.post('/',async (req, res) => {

  const { userId, comment, score, productId} = req.body;

  const sender = await User.findByPk(userId).catch(() => false);

  if (!sender) {
    return res.status(400).send({ error: 'Missing or invalid sender ID.' });
  }

  if (!productId || !/^[0-9a-fA-F]{8}\b-([0-9a-fA-F]{4}-){3}\b[0-9a-fA-F]{12}$/.test(productId)) {
    return res.status(400).send({ error: 'Missing or invalid product ID.' });
  }

  if (!score) {
    return res.status(400).send({ error: 'You must include a punctuation.' });
  }

  const product = await Product.findByPk(productId).catch(() => false)

  if (!product) {
    return res.status(404).send({ error: 'Product does not exist.' });
  }
  const newReview = await Review.create({
    userId,
    score,
    comment
  });

  const review = await product.addReview(newReview).catch(e => { console.log(e); return false; });

  if (review) {
    res.status(200).send({ success: 'Successfully added a review.', result: newReview.id });
  } else {
    res.status(503).send({ error: 'There was a problem processing your request.' });
  }

});
module.exports = router;