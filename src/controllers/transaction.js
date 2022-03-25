const sequelize = require('../db');
const { Transaction } = sequelize.models;
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
module.exports = {
    createTransaction,
    updateTransaction
  };
