const router = require("express").Router();
const sequelize = require("../db");
const jwt = require('jsonwebtoken');
const {decrypt} = require('../controllers/encrypt');
const { User, Product, Register, Transaction, Category } = sequelize.models;
const { verifyAdminToken } = require('../controllers/verifyToken');

const uuid = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/
let statusCode

router.put('/product/update/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params
    let {title, description, image, price, discount, stock, sales, categories} = req.body
    //let validEntries = Object.entries(req.body).filter(([, value]) => value != null).reduce((acc, [key, value])=>({...acc, [key]:value}),{}) 
    try{
        statusCode = 400
        if(!uuid.test(id)) throw new Error('Invalid product ID format')

        const product = await Product.findByPk(id)

        statusCode = 404
        if(!product) throw new Error('No product matches given ID')

        //const success = await Promise.all(Object.entries(validEntries).map(async ([key, value])=>await Product.update({[key]:value}, {where:{id}})))

        const success = await Product.update(
            {
                title:title??product.title,
                description:description??product.description,
                image:image??product.image,
                price:discount?price-(price*discount):price,
                stock:stock??product.stock, 
                sales:sales??product.sales,
                categories:categories??product.categories}, 
            {where: { id }}
        ).then(result => result[0]);
        
        statusCode = 500
        if(success) return res.status(200).json({status:'Product updated', success})
        else throw new Error('Unexpected error ocurred')
    }
    catch(err){ return res.status(statusCode).json({error:err.message}) }
})


router.delete('/product/delete/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params

    try{
        statusCode = 400
        if(!uuid.test(id)) throw new Error('Invalid product ID format')

        const product = await Product.findByPk(id)

        statusCode = 404
        if(!product) throw new Error('No product matches given ID')
        else {
            product.destroy() 
            return res.status(200).json({status:`Product '${product.title}' deleted`})
        }
    }
    catch(err){ return res.status(statusCode).json({error:err.message}) }
})


router.get('/transactions/find/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params
    
    try{
        if(id==='all'){
            const transactions = Transaction.findAll()
            let totalTransactions = Object.keys(transactions).length
            statusCode = 404
            if(totalTransactions) return res.status(200).json({total:totalTransactions, transactions:[...transactions]})
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


router.put('/transactions/update/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params
    let {state} = req.body
    
    try{
        statusCode=400
        if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error('Invalid transaction ID format')

        const transaction = await Transaction.findByPk(id)

        statusCode=404
        if(!transaction) throw new Error('No transaction found matching given ID')
        else {
            const success = await Transaction.update(
                {state}, 
                {where: { id }}
            ).then(result => result[0]);

            return res.status(200).json({status:'Transaction updated', success}) 
        }
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
})


router.put('/user/update/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params
    let validEntries = Object.entries(req.body).filter(([, value]) => value != null).reduce((acc, [key, value])=>({...acc, [key]:value}),{}) 

    try{
          statusCode = 400
          if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error("Invalid ID format")
          
          const user = await User.findByPk(id)

          statusCode = 404
          if(!user) throw new Error("No user found with given ID")
          
          const success = await Promise.all(Object.entries(validEntries).map(async ([key, value])=>await Product.update({[key]:value}, {where:{id}})))

          statusCode = 500
          if(success) return res.status(200).json({status:'User updated', success})
          else throw new Error('Unexpected error ocurred')
    }
    catch(err){
          return res.status(statusCode).json({error: err.message})
    }
})


router.delete('/user/delete/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params

    try{
        statusCode = 400
        if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(id)) throw new Error("Invalid ID format")

        const user = await User.findByPk(id)

        statusCode = 404
        if(!user) throw new Error("No user found with given ID")
        else {
            user.destroy()
            return res.status(200).json({status:`User '${user.name+' '+user.lastName}' deleted`})
        }
    }
    catch(err){
        return res.status(statusCode).json({error: err.message})
    }
})

router.post('/categories/create', verifyAdminToken, async (req, res)=>{
    let {categories} = req.body

    try{
        statusCode = 400
        if(!categories) return new Error('No categories were sent')
        let existingCategories = await Category.findAll();

        let newCategories = categories.filter(cat=>!existingCategories.includes(cat))

        if(!newCategories) return res.status(200).json({status:'None of the sent categories were new'})

        let success = await Promise.all(newCategories.map(async cat=>await Category.create({name:cat})))

        statusCode = 500
        if(success) res.status(201).json({status:'Categories created', newCategories})
        else throw new Error("Unexpected error occurred")
    }
    catch(err){
        return res.status(statusCode).json({error: err.message})
    }
})

router.delete('/categories/delete', verifyAdminToken, async (req, res)=>{
    let {categories} = req.body

    try{
        statusCode = 400
        if(!categories) return new Error('No categories were sent')
        let existingCategories = await Category.findAll();

        let selectedCategories = categories.filter(cat=>existingCategories.includes(cat))

        if(!selectedCategories) return res.status(200).json({status:'None of the sent categories existed'})

        let success = await Promise.all(selectedCategories.map(async cat=>await Category.destroy({where:{name:cat}})))

        statusCode = 500
        if(success) res.status(201).json({status:'Categories deleted:', selectedCategories})
        else throw new Error("Unexpected error occurred")
    }
    catch(err){
        return res.status(statusCode).json({error: err.message})
    }
})


module.exports = router;