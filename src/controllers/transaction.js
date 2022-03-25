const sequelize = require('../db');
const { Transaction, User } = sequelize.models;
const createTransaction= async (state,cart)=>
{    
        return await Transaction.create({
            cart,
            state,
        });
}
const updateTransaction= async (state,transactionId)=>
{    
        return await Transaction.update(
            {
              state,
            },
            {
              where: {
                id: transactionId,
              },
            }
          );
}
const getUserTransactionsComplete=async (userId)=>{
  let user= await User.findOne({
    where:{
        id:userId,
    },
    include:[{model: Transaction, where:{state:"complete"}}]
  });
  return user?user.Transactions:[];
}
module.exports = {
    createTransaction,
    updateTransaction,
    getUserTransactionsComplete
  };
