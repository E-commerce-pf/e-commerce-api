const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      disable:{
        type: DataTypes.BOOLEAN,
        defaultValue : false,
        allowNull: true
      }
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
