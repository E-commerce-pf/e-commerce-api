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
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://cdn-icons-png.flaticon.com/512/6693/6693080.png",
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
