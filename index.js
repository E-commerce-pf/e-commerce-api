const express = require("express");
const app = express();
const router = require("./src/routes/routes");
const categories = require("./src/data/categories");
const products = require("./src/data/products");
const sequelise = require("./src/db");
const { Product, Category, Review, User } = sequelise.models;

app.use("/api", router);
const sequelize = require("./src/db");

sequelize.sync({ force: true }).then(() => {
  app.listen(3001, async () => {
    console.log("Listening on port 3001");

    await Category.bulkCreate(categories);
    await Product.bulkCreate(products);
    let prueba = [];
    for (let i = 0; i < products.length; i++) {
      const findCategory = await Category.findAll({
        where: {
          name: products[i].categories,
        },
      });
      // console.log(findCategory[i].dataValues.name);
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
/* conn.sync({ force: true }).then(() => {
}); */
