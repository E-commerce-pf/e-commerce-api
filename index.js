const server = require("./src/app.js");
require("dotenv").config();
const { PORT } = process.env;
const categories = require("./src/data/categories");
const products = require("./src/data/products");
const users = require("./src/data/user");
const sequelize = require("./src/db");
const { encrypt } = require("./src/controllers/encrypt");
const { Product, Category, User, Cart } = sequelize.models;

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);

    //   await Category.bulkCreate(categories);

    //   for (let i = 0; i < products.length; i++) {
    //     products[i].image = products[i].image.join("*_*");
    //     const findCategory = await Category.findAll({
    //       where: {
    //         name: products[i].categories,
    //       },
    //     });

    //     const [newProduct] = await Product.findOrCreate({
    //       where: {
    //         title: products[i].title,
    //         price: products[i].price,
    //         image: products[i].image,
    //         description: products[i].description,
    //         stock: products[i].stock,
    //         sales: products[i].sales || 0,
    //         discount: products[i].discount || 0,
    //       },
    //     });

    //     await newProduct.setCategories(findCategory);
    //   }

    //   for (let i = 0; i < users.length; i++) {
    //     users[i].password = encrypt(users[i].password);

    //     const userCartId = await Cart.create().then(
    //       ({ dataValues }) => dataValues.id
    //     );

    //     await User.findOrCreate({
    //       where: {
    //         cartId: userCartId,
    //         name: users[i].name,
    //         lastName: users[i].lastName,
    //         email: users[i].email,
    //         password: users[i].password,
    //         country: users[i].country,
    //         isAdmin: users[i].isAdmin || false,
    //         phone: users[i].phone || "",
    //         address: users[i].address || "",
    //         city: users[i].city || "",
    //       },
    //     });
    //   }
    //   console.log("Products, users, admins and categories pre charged :)");
  });
});
