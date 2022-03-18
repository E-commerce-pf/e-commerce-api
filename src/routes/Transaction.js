const sequelize = require('../db');
const { User,Product} = sequelize.models;
const {
    getProductOwner,
  } = require("../controllers/product");
const {
    getUser,
  } = require("../controllers/user");
const {
    createTransaction,
  } = require("../controllers/transaction");

router.post("/:productId/:userId", async (req, res) => {
    const { productId, userId } = req.params;
    //Buscamos el producto
    //let product=await Product.findByPk(productId);
    let product=await Product.findOne({
        include: User
    }, { where: {id:productId}}
    ).dataValues;

    if (!product) return res.status(400).json({ error: 'Product not found.' });
    //Buscamos al dueño del producto
    
    const userOwner = await getProductOwner(product);

    if (!userOwner) return res.status(400).json({ error: 'Owner not found.' });
    const userClient = await getUser(userId);
    if (!userClient) return res.status(400).json({ error: 'User not found.' });
    try {
        const transactionClient = await createTransaction(product,false);
        const transactionOwner = await createTransaction(product,true);

        await userClient.addTransaction(transactionClient.id);
        await userOwner.addTransaction(transactionOwner.id);

        return res.status(200).send({succes:"Transaction created successfuly"});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});