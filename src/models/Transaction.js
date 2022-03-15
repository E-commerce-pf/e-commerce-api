const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
      sequelize.define("Category", {
            id: {
                  type: DataTypes.UUID,
                  defaultValue: DataTypes.UUIDV4,
                  primaryKey: true,
            },
            product: {
                  type: DataTypes.JSON,
                  allowNull: false,
            },
            isSell:{
                  type: DataTypes.BOOLEAN,
                  defaultValue: false
            },
            state:{
                  type: DataTypes.STRING,
                  allowNull : false
            }
      });
};