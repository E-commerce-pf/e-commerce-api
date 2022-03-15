const express = require('express');
const router = express.Router();

//Enlaze de las rutas
const registerRoute = require('./Register');

router.use('/register', registerRoute);

module.exports = router;