const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
      sequelize.define("Transaction", {
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
                  type: DataTypes.ENUM('process', 'complete', 'canceled'),
                  allowNull : false
            }
      });
};