const router = require("express").Router();
const sequelize = require("../db");
const jwt = require('jsonwebtoken');
const {decrypt} = require('../controllers/encrypt');
const { Product } = sequelize.models;
const { verifyUserToken } = require('../controllers/verifyToken');

let statusCode=500

router.get('/find/:id', async (req, res)=>{
    let {id} = req.params
    
    try{
        if(id==='all'){
            const products = Product.findAll()
            let totalProducts = Object.keys(products).length
            if(totalProducts) return res.status(200).json([totalProducts, ...products])
            else throw new Error('No products have been added yet!')
        }
        statusCode=400
        if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error('Invalid ID format')

        const product = await Product.findByPk(id)

        statusCode=404
        if(!product) throw new Error('Product not found')
        else return res.status(200).json(product) 
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
})

module.exports = router;