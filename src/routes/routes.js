const router = require("express").Router();

//IMPORTAMOS TODAS LAS RUTAS

const user = require("./User");
const registerRoute = require("./Register");
const reviewRoute = require("./Review");
const productRoute = require("./Product");
const cartRoute = require("./Cart");
const categoryRoute = require("./Category");
const adminRoute = require("./Admin");
const routerUsers = require("./Users");
const routerReviews = require("./Reviews");
const paymentRouter = require("./Payment");

//DEFINIMOS LOS CASOS DE USO DE LAS RUTAS
router.use("/user", user);
router.use("/register", registerRoute);
router.use("/reviews", routerReviews);
router.use("/review", reviewRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/category", categoryRoute);
router.use("/admin", adminRoute);
router.use("/users", routerUsers);
router.use("/payment", paymentRouter);

module.exports = router;
