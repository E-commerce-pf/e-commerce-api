const sequelize = require('../db');
const { encrypt } = require('./encrypt');
const { User, Cart} = sequelize.models;

const createUser = async ( res, data )=>{
      const {email, lastName, name, password, country, loginWithSocial} = data;

      if(!loginWithSocial){
            if(!email || !lastName ||!name ||!password || !country) return res.status( 400 ).json( { error: "Some fields where empty" } );
      }

      //Encriptación de la contraseña
      data.password = encrypt( password );

      const result = await User.findOne({
            where: {
            email,
            disable : false
            }
      });

      if(result) return res.status( 400 ).json( {error: 'This email has already been used'} )

      try {
            let userCartId = await Cart.create().then(res => res.dataValues.id);
            let user = await User.create( {...data, cartId : userCartId} );
            return res.status(201).json( {success: "User created successfuly", user} );

      } catch ( error ) {
            return res.status( 400 ).json( {error : error.message} );
      }
};

module.exports = createUser;