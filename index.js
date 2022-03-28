const server = require("./src/app.js");
require("dotenv").config();
const { PORT } = process.env;
const categories = require("./src/data/categories");
const products = require("./src/data/products");
const sequelize = require("./src/db");
const { Product, Category, Review, User } = sequelize.models;

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    
    await Category.bulkCreate(categories);
    await Product.bulkCreate(products);
    for (let i = 0; i < products.length; i++) {
      const findCategory = await Category.findAll({
        where: {
          name: products[i].categories,
        },
      });

      const [newProduct] = await Product.findOrCreate({
        where: {
          title: products[i].title,
          price: products[i].price,
          image: products[i].image,
          description: products[i].description,
          stock: products[i].stock,
          sales: products[i].sales,
          discount: products[i].discount,
        },
      });

      await newProduct.setCategories(findCategory);
    }

    console.log("Products and categories pre charged :)");
  });
});
