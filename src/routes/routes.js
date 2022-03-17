const router = require("express").Router();

//IMPORTAMOS TODAS LAS RUTAS
const user = require("./User");
const registerRoute = require("./Register");
const reviewRoute = require("./Review");

//DEFINIMOS LOS CASOS DE USO DE LAS RUTAS
router.use("/user", user);
router.use("/register", registerRoute);
router.use("/review", reviewRoute);

module.exports = router;
