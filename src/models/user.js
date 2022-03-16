const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin:{
      type : DataTypes.BOOLEAN,
      defaultValue: false
    },
    genre:{
      type : DataTypes.STRING
      //  Aqui deberia tener las opciones [hombre, mujer, otro, prefiero no decirlo]
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
