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
      type: DataTypes.ENUM('Hombre', 'Mujer', 'Otro', 'Prefiero no decirlo')
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postedProducts: {
      type: DataTypes.ARRAY(DataTypes.STRING) // Acá se guardan los id de los productos posteados por el usuario
    },
    cart:{
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    history:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  });
};
