const { DataTypes } = require("sequelize");

const Product = (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
      },
      allowNull: false,
    },
    sales: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    discount: {
      type: DataTypes.FLOAT,
      validate: {
        isNumeric: true,
        min: 0,
        max: 1,
      },
    },
  });
};

module.exports = Product;
