const sequelize = require('../db');
const { Favorite,Product,User } = sequelize.models;

const getFavorites=async (userId)=>{
    let favorites=await User.findOne({
        where:{
            id:userId
        },
        include:[{model:Favorite,include:Product}]
    });
    return favorites.dataValues.Favorites
}

module.exports = {
    getFavorites
  };
