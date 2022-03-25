require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
  native: false,
  // Config para Heroku
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
console.log(sequelize.models);

const { Product, Category, Review, User, ProductInCart, Cart, Transaction } = sequelize.models;

//Relaciones
Product.belongsToMany(Category, {
  through: "ProductCategories",
  timestamps: false,
});

Product.hasMany(Review);

Category.belongsToMany(Product, {
  through: "ProductCategories",
  timestamps: false,
});



Cart.hasMany(ProductInCart);
ProductInCart.belongsTo(Cart);

User.hasMany(Transaction);
Transaction.belongsTo(User);


Review.belongsTo(Product);

module.exports = sequelize;
