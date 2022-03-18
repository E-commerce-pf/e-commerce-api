const router = require("express").Router();
const sequelize = require("../db");
const jwt = require('jsonwebtoken');
const {decrypt} = require('../controllers/encrypt');
const { User, Product, Register, Transaction } = sequelize.models;
const { verifyAdminToken } = require('../controllers/verifyToken');

const uuid = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/
let statusCode

router.put('/product/update/:productId', verifyAdminToken, async (req, res)=>{
    let {title, description, image, price, stock, sales, discount, categories} = req.body
    let {productId} = req.params

    try{
        statusCode = 400
        if(!uuid.test(productId)) throw new Error('Invalid product ID format')

        const product = await Product.findByPk(productId)

        statusCode = 404
        if(!product) throw new Error('No product matches given ID')

        const success = await Product.update(
            {title, description, image, price:price-(price*discount), stock, sales, categories}, 
            {where: { id: productId }}
        ).then(result => result[0]);

        if(success) return res.status(200).json({status:'Product updated', success})
    }
    catch(err){ return res.status(statusCode).json({error:err.message}) }
})


router.delete('/product/delete/:productId', verifyAdminToken, async (req, res)=>{
    let {productId} = req.params

    try{
        statusCode = 400
        if(!uuid.test(productId)) throw new Error('Invalid product ID format')

        const product = await Product.findByPk(productId)

        statusCode = 404
        if(!product) throw new Error('No product matches given ID')

        const success = await Product.update(
            {title, description, image, price:price-(price*discount), stock, sales, categories}, 
            {where: { id: productId }}
        ).then(result => result[0]);

        if(success) return res.status(200).json({status:`Product '${product.title}' deleted`})
    }
    catch(err){ return res.status(statusCode).json({error:err.message}) }
})

router.get('/transactions/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params
    
    try{
        if(id==='all'){
            const transactions = Transaction.findAll()
            let totaltransactions = Object.keys(transactions).length
            if(totalProducts) return res.status(200).json({total:totaltransactions, transactions:[...transactions]})
            else throw new Error('No transactions found!')
        }
        statusCode=400
        if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error('Invalid transaction ID format')

        const transaction = await Transaction.findByPk(id)

        statusCode=404
        if(!transaction) throw new Error('No transaction found matching given ID')
        else return res.status(200).json(transaction) 
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
})

router.get('/transactions/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params
    
    try{
        if(id==='all'){
            const transactions = Transaction.findAll()
            let totaltransactions = Object.keys(transactions).length
            if(totalProducts) return res.status(200).json({total:totaltransactions, transactions:[...transactions]})
            else throw new Error('No transactions found!')
        }
        statusCode=400
        if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error('Invalid transaction ID format')

        const transaction = await Transaction.findByPk(id)

        statusCode=404
        if(!transaction) throw new Error('No transaction found matching given ID')
        else return res.status(200).json(transaction) 
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
})

module.exports = router;