const { DataTypes } = require("sequelize");

const Product = (sequelize) => {
  sequelize.define(
    "Product",
    {
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
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
        allowNull: false
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
        defaultValue: 0,
        validate: {
          isNumeric: true,
        },
      },
      discount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isNumeric: true,
          min: 0,
          max: 1,
        },
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};

module.exports = Product;
