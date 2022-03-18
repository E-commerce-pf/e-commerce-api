const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {decrypt} = require('../controllers/encrypt');
const sequelise = require('../db');
const { User } = sequelise.models;
const { verifyUserToken } = require('../controllers/verifyToken');

router.post('/login', async(req,res) => {
      //Solamente se puede registrar con el email 
      let result;
      //Verificamos que nos hayan proporcionado los datos necesarios

      if(!req.body.loginWithSocial){
            if(!req.body.email || !req.body.password) return res.status(400).json({error: 'The necessary data to enter was not sent'});
      }

      try {
            //Buscamos el usuario en la base de datos
            result = await User.findOne({
                  where:{
                        email : req.body.email
                  }
            });
      } catch (error) {
            return res.status(400).json( error );
      }

      //En el caso de que no haya encontrado el usuario 
      if(!result){
            //Y está iniciando sesion con alguna red social
            if(req.body.loginWithSocial){
                  try {
                        await User.create(req.body)
                        return res.status(201).json({succes: 'User created in LogIn'})
                  } catch (error) {
                        return res.status(400).json({error: error})
                  }
            }
      }
      
      return res.status(400).json({error: 'User not found'});

      result = result.dataValues;
      try {
            //Desencriptamos la contraseña
            const passwordDecrypt = decrypt(result.password);
            if(passwordDecrypt === req.body.password){
                  result.password = passwordDecrypt;
                  //Evaluamos el rol que tiene este usuario
                  let role = 'User'
                  if(result.isAdmin){
                        role = 'Admin'
                  }
                  
                  //Creamos el token de acceso
                  const accessToken = jwt.sign({
                        role
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
            return res.status(400).json(error)
      }
})

router.get('/test', verifyUserToken, (req, res)=>{
      return res.send('Adelante, pase');
})

module.exports = router;