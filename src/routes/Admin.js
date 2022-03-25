const router = require("express").Router();
const sequelize = require("../db");
const jwt = require('jsonwebtoken');
const {decrypt} = require('../controllers/encrypt');
const { User, Product, Transaction, Category } = sequelize.models;
const { verifyAdminToken } = require('../controllers/verifyToken');

const uuid = /[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/
let statusCode

router.post('/login', async(req, res)=>{
    let result
    let {email, password} = req.body;
    try {
        result = await User.findOne({
            where:{
                email,
                isAdmin : true
            }
        });
    } catch (error) {
        return res.status(400).json({error: error.message});
    }

    if(!result) return res.status(400).json({error : 'User not found'});

    result = result.dataValues;
    try {
        const passwordDecrypt = decrypt(result.password);
        if(passwordDecrypt === password){
            result.password = passwordDecrypt;
            //Evaluamos el rol que tiene este usuario
            //Creamos el token de acceso
            const accessToken = jwt.sign({
                role : 'Admin'
            },
            process.env.JWT_KEY,
            { expiresIn : 60 * 60 * 24 }
            );
            return res.status(200).json({
                userId : result.id,
                name : result.name,
                lastName : result.lastName,
                email : result.email,
                accessToken
            });
        } else {
                return res.status(400).json({error: 'Data doesnt match'})
        }
    } catch (error) {
        return res.status(400).json({error : error.message});
    }
})




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
        if(success) return res.status(200).json({success:'Product updated'})
        else throw new Error('Unexpected error ocurred')
    }
    catch(err){ return res.status(statusCode).json({error:err.message}) }
})


router.delete('/product/:id', verifyAdminToken, async (req, res)=>{
    let {id} = req.params

    try{
        statusCode = 400
        if(!uuid.test(id)) throw new Error('Invalid product ID format')

        const product = await Product.findByPk(id)

        statusCode = 404
        if(!product) throw new Error('No product matches given ID')
        else {
            product.destroy() 
            return res.status(200).json({success:`Product '${product.title}' deleted`})
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
    
        const success = await Promise.all(Object.entries(validEntries).map(async ([key, value])=>await User.update({[key]:value}, {where:{id}})))

        statusCode = 500
        if(success) return res.status(200).json({status:'User updated', user : await User.findByPk(id)})
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

//CREAR UNA CATEGORIA NUEVA
router.post('/categories/create', verifyAdminToken, async (req, res)=>{
    let { name } = req.body
    if(!name) return res.status(400).json( {error:'No categories were sent'} );

    const result = await Category.findOne({
        where:{
            name
        }
    });

    if(result) return res.status(400).json({error: 'Category already exist'});

    try{
        const newCategory = await Category.create({name});
        return res.status(200).json({success:'Created successfuly', newCategory});
    }
    catch(err){
        return res.status(400).json({error: err.message})
    }
})

//ELIMINAR UNA CATEGORIA
router.delete('/categories/:id', verifyAdminToken, async (req, res)=>{
    const {id} = req.params
    console.log(id)
    
    try{
        const category = await Category.findOne({
            where:{
                id,
                disable : false
            }
        });
        if(!category) return res.status(400).json({error : 'Category not found'})
        category.update({disable : true});
        return res.status(200).json({success : 'Category eliminated'});
    }
    catch(err){
        return res.status(400).json({error: err.message})
    }
})

//TRAER TODOS LOS USUARIOS
router.get('/users', verifyAdminToken, async(req, res)=>{
    const result = await User.findAll().then(res => res.map(item => item.dataValues ) );
    res.send(result);
})

module.exports = router;