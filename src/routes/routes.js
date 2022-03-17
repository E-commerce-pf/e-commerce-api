const router = require("express").Router();

//IMPORTAMOS TODAS LAS RUTAS
const user = require("./User");
const registerRoute = require("./Register");
const reviewRoute = require("./Review");
const productRoute = require("./Product");
const cartRoute = require("./Cart");
const categoryRoute = require("./Category");

//DEFINIMOS LOS CASOS DE USO DE LAS RUTAS
router.use("/user", user);
router.use("/register", registerRoute);
router.use("/review", reviewRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/category", categoryRoute);

module.exports = router;
