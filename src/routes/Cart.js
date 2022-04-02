const router = require("express").Router();
const { isUUID } = require("../controllers/isUUID");
const sequelize = require("../db");
const { User, Product, ProductInCart, Cart } = sequelize.models;
const {
    getCart,
    createProductInCart,
    updateProductInCart,
    updateCart,
    updateProductsInCart
} = require("../controllers/cart");
let statusCode=500

router.post('/:productId', async (req, res)=>{
    const {userId,quantity} = req.body;
    const {productId}=req.params;
    try{
        //Comprobaciones
        if(isNaN(quantity) || quantity<=0)
        return res .status(400).send({error:'quantity debe ser un numero y mayor a cero'});
        if(!isUUID(productId))
        return res .status(400).send({error:'id del producto no valida'});
        let product = await Product.findByPk(productId);
        if(!product)
        return res.status(404).send({error:'Product not found'});
        if( quantity>product.stock )
        return res.status(404).send({error:'Quantity must not be greater than the stock of the product'});

        let user= await User.findByPk(userId);
        if(!user)
        return res.status(404).send({error:'User not found'});


        let cart= await getCart(user.cartId);
        let productInCart=await createProductInCart(quantity,productId);
        let totalPrice=cart.totalPrice+quantity*product.price-quantity*product.price*product.discount;
        let existProductInCart=cart.ProductInCarts.find((product)=>product.productId===productId);
        if(existProductInCart){
            await updateProductInCart(quantity,existProductInCart.id);
            totalPrice-=existProductInCart.quantity*product.price-existProductInCart.quantity*product.price*product.discount; 
        } else {
            await cart.addProductInCart( productInCart );
        }
        await updateCart(totalPrice,user.cartId);
        cart = await getCart(user.cartId);
        let status = existProductInCart ? "Cart updated" : "Product added";
        return res.status(200).json({status,cart}) 
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
});

router.put('/:productId', async (req, res)=>{
    let {productId}=req.params;
    let {userId,quantity}=req.body;
    try{
        //Comprobaciones
        if(productId!=="all"&&!isUUID(productId))
            return res .status(400).send({error:'id del producto no valida'});
        if(!isUUID(userId))
            return res .status(400).send({error:'id del usuario no valida'});
        let user= await User.findByPk(userId);
        if(!user)
            return res.status(404).send({error:'User not found'});
        let cart= await getCart(user.cartId);
        let newProductsInCart=[];
        let productRemoved="all";
        if(productId!=="all"){
            if(!quantity){
                newProductsInCart=cart.ProductInCarts
                .filter(p=>{
                    if(p.productId!==productId) return true
                    else productRemoved=p;
                });
            } else {
                newProductsInCart=cart.ProductInCarts
                .map(p=>{
                    if(p.productId!==productId) return p
                    else {
                        p.dataValues.quantity=p.dataValues.quantity-quantity;
                        productRemoved=p;
                        return productRemoved;
                    }
                });
            }
        }
        let success=await updateProductsInCart(newProductsInCart,cart,productId,productRemoved,quantity);
        if(success.error)
            return res.status(404).send({error:success.error});
        cart= await getCart(user.cartId);
        return res.status(200).json({status:"updated",cart}) 
    }
    catch(err){ return res.status(statusCode).json({error: err.message}) }
});

router.get("/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      if (!isUUID(userId))
        return res.status(400).send({status:"The sent id is not valid (UUID)"});
      let user= await User.findByPk(userId);
      let cart =  await Cart.findOne({
          where:{
              id:user.cartId
          },
          include: ProductInCart
      })
        return res.status(200).send({status:"Successfully obtained car", cart});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:error.message});
    }
  });

module.exports = router;