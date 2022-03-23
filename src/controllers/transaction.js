const sequelize = require('../db');
const { Transaction } = sequelize.models;
const createTransaction= async (product,isSell,state)=>
{    
        return await Transaction.create({
            product,
            isSell,
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
