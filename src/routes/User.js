const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {decrypt, encrypt} = require('../controllers/encrypt');
const sequelize = require('../db');
const { User, Product } = sequelize.models;
const { verifyUserToken } = require('../controllers/verifyToken');
const createUser = require('../controllers/createUser');

router.post('/login', async(req,res) => {
      let result;
      let {email, password, loginWithSocial} = req.body;
      //Verificamos que nos hayan proporcionado los datos necesarios
      if(!loginWithSocial){
            if(!email || !password) return res.status(400).json({error: 'The necessary data to enter was not sent'});
      }

      try {
            //Buscamos el usuario en la base de datos
            result = await User.findOne({
                  where:{
                        email,
                        disable : false
                  }
            });
      } catch (error) {
            return res.status(400).json({error: error.message});
      }

      if(!result){
            if(loginWithSocial){
                  return createUser(res, req.body);
            }
            return res.status(400).json({error: 'User not found'})
      }

      result = result.dataValues;
      console.log(result);
      try {
            //Desencriptamos la contraseña
            const passwordDecrypt = decrypt(result.password);
            if(passwordDecrypt === password){
                  result.password = passwordDecrypt;
                  //Evaluamos el rol que tiene este usuario
                  let role = 'User'
                  if(result.isAdmin){
                        role = 'Admin'
                  }
                  
                  //Creamos el token de acceso
                  const accessToken = jwt.sign({
                        role
                  },process.env.JWT_KEY,
                  { expiresIn : 60 * 60 * 24 });

                  return res.status(200).json({ success : 'Login Succes', user :{
                        userId : result.id,
                        name : result.name,
                        lastName : result.lastName,
                        email : result.email,
                        accessToken,
                        phone: result.phone,
                        country: result.country,
                        city: result.city,
                        address: result.address,
                  }});
            } else {
                  return res.status(400).json({error: 'Data doesnt match'})
            }

      } catch (error) {
            return res.status(400).json({error : error.message})
      }
})

router.get('/products/:userId', async (req, res)=>{
      let {userId} = req.params
      
      try{
            statusCode = 400
            if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(userId)) throw new Error("Invalid ID format")

            const user = await User.findByPk(userId)

            statusCode = 404
            if(!user) throw new Error("No user found with given ID")

            if(user.postedProducts) {

                  let products = Promise.all(user.postedProducts.map(async e=>{
                        let product = await Product.findByPk(e)
                        return product??'Product not found'
                  }))
                  
                  return res.status(200).json(products)
            }
            else throw new Error("This user has no products on sale")
      }
      catch(err){ return res.status(statusCode).json({error: err.message}) }
})

router.get('/find/:userId', async (req, res)=>{
      let {userId} = req.params

      try{
            statusCode = 400
            if(!/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/.test(userId)) throw new Error("Invalid ID format")
            const user = await User.findByPk(userId)
            statusCode = 404
            if(!user) throw new Error("No user found with given ID")
            else return res.status(200).json(user)
      }
      catch(err){
            return res.status(statusCode).json({error: err.message})
      }
})

router.get('/test', verifyUserToken, (req, res)=>{
      return res.send('Adelante, pase');
})

module.exports = router;