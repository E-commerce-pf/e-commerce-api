const sequelize = require('../db');
const { User} = sequelize.models;
const getUser= async (userId)=>
{    
    try {
        return await User.findOne({
            where: {
                id: userId
            }
        })
    } catch (error) {
        return error.message
    }
}
module.exports = {
    getUser,
  };
