const router = require('express').Router();
const verifyToken = require('../controllers/verifyToken');

router.get('/', verifyToken, (req,res)=>{
      res.send('Hola')
})


module.exports = router;