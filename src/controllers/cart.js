const sequelize = require('../db');
const { Cart,ProductInCart,User, Product } = sequelize.models;
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
const updateProductsInCart= async (ProductInCarts,cart,productId,productRemoved)=>
{    
    if(productRemoved){
        totalPrice=0;
        if(productId!=="all"){
            let product= await Product.findByPk(productId);
            totalPrice=cart.totalPrice-product.price*productRemoved.dataValues.quantity;
        }
            
        await updateCart(totalPrice,cart.id);
        return await cart.setProductInCarts(ProductInCarts);
    } else{
        return {error:"Product in cart not found"}
    }
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
    resetUserCart,
    updateProductsInCart
  };
