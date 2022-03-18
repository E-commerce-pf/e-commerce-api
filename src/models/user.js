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
    loginWithSocial:{
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
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
      allowNull: true,
    },
    isAdmin:{
      type : DataTypes.BOOLEAN,
      defaultValue: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postedProducts: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Acá se guardan los id de los productos posteados por el usuario
      allowNull: true
    },
    cart:{
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true

    },
    history:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true

    }
  });
};
