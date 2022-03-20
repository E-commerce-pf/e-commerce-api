const router = require('express').Router();
const sequelize = require('../db');
const { User, Product, Review } = sequelize.models;
const {
  createReview,
  mostVoted
} = require("../controllers/review");

router.post('/',async (req, res) => {

  const { userId, comment, score, productId} = req.body;

  const sender = await User.findOne({
    where:{
      id: userId
    },
  }).then(r=>r.dataValues).catch(() => false);
  
  if (!sender) {
    return res.status(400).send({ error: 'Missing or invalid sender ID.' });
  }

  if (!productId || !/^[0-9a-fA-F]{8}\b-([0-9a-fA-F]{4}-){3}\b[0-9a-fA-F]{12}$/.test(productId)) {
    return res.status(400).send({ error: 'Missing or invalid product ID.' });
  }

  if (!score) {
    return res.status(400).send({ error: 'You must include a punctuation.' });
  }

  const product = await Product.findOne({
    where:{
      id:productId
    },
    include: Review
  })
  if (!product) {
    return res.status(404).send({ error: 'Product does not exist.' });
  }
  let reviewId;
  let userVoted=product.Reviews?.find((review)=>{
    if(review.userId===userId){
      reviewId=review.id;
      return true;
    }
    else return false;
  });
  if (userVoted) {
    for (const key in req.body) {
      await Review.update(
        {
          [key]: req.body[key],
        },
        {
          where: {
            id: reviewId,
          },
        }
      );
    }
    return res.status(200).send({ status: 'Successfully updated review.'});
  }
  const newReview = await createReview(userId,score,comment);

  const review = await product.addReview(newReview).catch(e => { console.log(e); return false; });
  if (review) {
    res.status(200).send({ success: 'Successfully added review.', result: newReview.id });
  } else {
    res.status(503).send({ error: 'There was a problem processing your request.' });
  }

});
router.get('/mostvoted',async (req,res)=>{
  try {
    let {number}=req.body;
    if(!number&&number!==0) number=4; 
    let mostVotedReviews=await mostVoted(number);
    res.status(201).send(mostVotedReviews);
  } catch (error) {
    console.log(error.message)
    res.status(503).send({ error: error.message });
  }
  
})
module.exports = router;