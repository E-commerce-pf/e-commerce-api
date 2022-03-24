const sequelize = require('../db');
const router = require('express').Router();
const {Product,Transaction} = sequelize.models;
const {
    createTransaction, updateTransaction,
  } = require("../controllers/transaction");
const { isUUID } = require('../controllers/isUUID');

router.post("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    let {state,isSell} = req.body;
    if (!isUUID(productId))
    return res.status(400).send({status:"The sent id is not valid (UUID)"});

    if(isSell===undefined) isSell=false;
    if(isSell!==false&&isSell!==true) 
    return res.status(400).send({status:"isSell must be true or false"});
    if(!state) state="process"
    let product=await Product.findByPk(productId);

    if(!product) 
    return res.status(404).send({status:"Product not found"});

    if (!product) return res.status(400).json({ error: 'Product not found.' });

        const transaction = await createTransaction(product,isSell,state);
        return res.status(200).send({status:"Transaction created successfuly", transaction});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error.message});
    }
});
router.put("/:transactionId", async (req, res) => {
  try {
  const { transactionId } = req.params;
  let {state} = req.body;
  if (!isUUID(transactionId))
    return res.status(400).send({status:"The sent id is not valid (UUID)"});

  if(!state) state="process";
  await updateTransaction(state,transactionId);
  let transaction= await Transaction.findByPk(transactionId);
  if(!transaction) 
  return res.status(404).send({status:"Transaction not found"});
      return res.status(200).send({status:"Successfully updated transaction", transaction});
  } catch (error) {
      console.log(error);
      return res.status(500).json({error:error.message});
  }
});
module.exports = router;