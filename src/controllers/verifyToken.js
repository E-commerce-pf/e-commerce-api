const jwt = require('jsonwebtoken'); //REQUIRE JSON WEB TOKEN PARA CREAR TOKEN DE AUTHORIZACION

const verifyToken = (req,res,next) =>{
      const token = req.headers.token;
      console.log(token)
      next();
}
module.exports = verifyToken;