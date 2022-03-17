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
    console.log("Products and categories pre charged :)");
  });
});
/* conn.sync({ force: true }).then(() => {
}); */
