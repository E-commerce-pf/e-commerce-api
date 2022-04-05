const router = require("express").Router();

//IMPORTAMOS TODAS LAS RUTAS

const user = require("./User");
const registerRoute = require("./Register");
const reviewRoute = require("./Review");
const productRoute = require("./Product");
const favoriteRoute = require("./Favorite");
const cartRoute = require("./Cart");
const categoryRoute = require("./Category");
const adminRoute = require("./Admin");
const routerUsers = require("./Users");
const routerReviews = require("./Reviews");
const routerTransaction = require("./Transaction");
const paymentRouter = require("./Payment");
const sendEmailRouter = require("./SendEmail");
const newletterRoute = require("./Newletter");

//DEFINIMOS LOS CASOS DE USO DE LAS RUTAS
router.use("/user", user);
router.use("/register", registerRoute);
router.use("/reviews", routerReviews);
router.use("/review", reviewRoute);
router.use("/product", productRoute);
router.use("/favorite", favoriteRoute);
router.use("/cart", cartRoute);
router.use("/category", categoryRoute);
router.use("/admin", adminRoute);
router.use("/users", routerUsers);
router.use("/transaction", routerTransaction);
router.use("/payment", paymentRouter);
router.use("/sendemail", sendEmailRouter);
router.use("/newletter", newletterRoute);

module.exports = router;
