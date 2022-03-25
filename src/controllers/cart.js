const sequelize = require('../db');
const { Cart,ProductInCart,User } = sequelize.models;
const getCart= async (cartId)=>
{    
    return await Cart.findOne({
        where:{
            id:cartId
        },
        include:ProductInCart
    });
}
const createProductInCart= async (quantity,productId)=>
{    
    return await ProductInCart.create({
        quantity,
        productId
    });
}
const updateProductInCart= async (quantity,productInCartId)=>
{    
    return await ProductInCart.update(
        {
        quantity,
        },
        {
        where: {
            id: productInCartId,
        },
        }
    );
}
const updateCart= async (totalPrice,cartId)=>
{    
    return await Cart.update(
        {
        totalPrice,
        },
        {
        where: {
            id: cartId,
        },
        }
    );
}

const resetUserCart= async (userId)=>
{    
    try {
        let newCartId=await Cart.create().then(r=>r.dataValues.id);
        let user=await User.findByPk(userId);
        await Cart.destroy({
            where:{
                id:user.cartId
            }
        })
        await User.update(
            {
            cartId:newCartId,
            },
            {
            where: {
                id: userId,
            },
            }
        );
        return {status:"Cart reseted"}
    } catch (error) {
        console.log(error.message)
        return {status:"Error updating user cart"}
    }
}

module.exports = {
    getCart,
    createProductInCart,
    updateProductInCart,
    updateCart,
    resetUserCart
  };
