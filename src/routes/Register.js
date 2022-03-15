const router = require("express").Router();
const sequelize = require("../db");
const User = sequelize.models.User;
const { encrypt } = require("../controllers/encrypt");

router.post("/", async (req, res) => {
    //Encriptación de la contraseña
    let {email,lastName,name,password,phone} = req.body;
    if( !email || !lastName ||!name ||!phone ||!password ) return res.status(400).json({ error: "Some fields where empty" });
    req.body.password = encrypt(req.body.password);
  
    //Comprobación que no exista un email igual en la base de datos
    const result = await User.findOne({
      where: {
        email
      },
    });
    if (!result) {
      try {
        await User.create(req.body);
        return res.status(200).json({ success: "User created successfuly" });
      } catch (error) {
        console.log("Error: ", error);
        return res.status(400).json(error);
      }
    }
    res.status(400).json({ error: "User already exists" });
  });
  module.exports = router;