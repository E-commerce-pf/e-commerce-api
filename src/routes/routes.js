const router = require('express').Router();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//DEFINIMOS LOS MIDDLEWARE
router.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
router.use(bodyParser.json({ limit: "50mb" }));
router.use(cookieParser());
router.use(morgan("dev"));
router.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      next();
});

//Enlaze de las rutas
const registerRoute = require('./Register');

router.use('/register', registerRoute);




module.exports = router;