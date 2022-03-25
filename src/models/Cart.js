const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
        },
        defaultValue:0,
        allowNull: false
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
