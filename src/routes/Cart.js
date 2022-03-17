const router = require("express").Router();
const sequelize = require("../db");
const jwt = require('jsonwebtoken');
const {decrypt} = require('../controllers/encrypt');
const { User, Product } = sequelize.models;
const { verifyUserToken } = require('../controllers/verifyToken');

let statusCode=500

// Agregar o borrar del carrito
router.post('/cart', async (req, res)=>{
    let {userId, productId, method, amount} = req.body

    let uuid = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/

    try{
        statusCode=400
        if(!uuid.test(userId)) throw new Error('Invalid user ID format')
        if(!uuid.test(productId)) throw new Error('Invalid product ID format')
        if(!['update','remove'].includes(method)) throw new Error(`Invalid method "${method}". Supported methods are: update, remove`)
        if(isNaN(Number(amount))) throw new Error('Invalid amount. This value must be a number')

        let user = await User.findByPk(userId)
        let product = await Product.findByPk(productId)

        statusCode=404
        if(!user||!product) throw new Error('These elements were not found:'+(user?'':' user')+(product?'':' product'))

        let foundProduct = user.cart.indexOf(user.cart.find(e=>e.productId===productId))

        await user.update({
            cart: method==='update'
            ?[...cart, cart[foundProduct]={productId, amount}]
            :cart.splice(foundProduct, 1)
        })

        return res.status(200).json({success: 'Operation completed', cart: user.cart}) 
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
})

module.exports = router;