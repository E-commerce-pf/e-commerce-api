const router = require("express").Router();
const sequelize = require("../db");
const User = sequelize.models.User;
const { encrypt } = require("../controllers/encrypt");

let statusCode=500

router.post("/", async (req, res) => {
    const {email, lastName, name, password, country, loginWithSocial} = req.body;
    if(!loginWithSocial){
      if(!email || !lastName ||!name ||!password || !country) return res.status(400).json({ error: "Some fields where empty" });
    }

    //Encriptación de la contraseña
    req.body.password = encrypt(password);

    const result = await User.findOne({
      where: {
        email
      },
    });

    //Comprobación que no exista un email igual en la base de datos
    statusCode=400
    if(result) return res.status(400).json({error: 'This email has already been used'})

    else{
      try {
        let user = await User.create(req.body);
        return res.status(201).json({ status: "User created successfuly", user });
      } catch (error) {
        console.log("Error: ", error);
        return res.status(400).json(error);
      }
    }
  });
  module.exports = router;