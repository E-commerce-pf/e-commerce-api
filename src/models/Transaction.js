const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
      sequelize.define("Transaction", {
            id: {
                  type: DataTypes.UUID,
                  defaultValue: DataTypes.UUIDV4,
                  primaryKey: true,
            },
            token: {
                  type: DataTypes.TEXT,
                  allowNull: true,
            },
            cart: {
                  type: DataTypes.JSON,
                  allowNull: false,
            },
            created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
            },
            state:{
                  type: DataTypes.ENUM('process', 'complete', 'canceled'),
                  allowNull : false
            }
      });
};