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
      type: DataTypes.STRING,
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
    },
    sales: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
  });
};

module.exports = Product;
