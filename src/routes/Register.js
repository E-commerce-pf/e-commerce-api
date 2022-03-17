const router = require("express").Router();
const sequelize = require("../db");
const User = sequelize.models.User;
const { encrypt } = require("../controllers/encrypt");

let statusCode=500

router.post("/", async (req, res) => {
  let {email, lastName, name, password} = req.body;
  
  try{
    statusCode=400
    if( !email || !lastName ||!name ||!password ) throw new Error('Some fields were empty')

    //Encriptación de la contraseña
    req.body.password = encrypt(password);

    const result = await User.findOne({
      where: {
        email
      },
    });

    //Comprobación que no exista un email igual en la base de datos
    statusCode=400
    if(result) throw new Error('This email has already been used')

    else{
      try {
        let user = await User.create(req.body);
        return res.status(201).json({ success: "User created successfuly", user });
      } catch (error) {
        console.log("Error: ", error);
        return res.status(400).json(error);
      }
    }
  }
  catch(err){
    return res.status(statusCode).json({error: err.message})
  }
    
  });
  module.exports = router;