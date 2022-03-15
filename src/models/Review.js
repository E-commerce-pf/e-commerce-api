const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
      sequelize.define("Category", {
            id: {
                  type: DataTypes.UUID,
                  defaultValue: DataTypes.UUIDV4,
                  primaryKey: true,
            },
            userId: {
                  type: DataTypes.UUID,
                  allowNull: false,
            },
            score: {
                  type: DataTypes.INTEGER,
                  allowNull: false
            },
            comment: {
                  type: DataTypes.TEXT,
                  allowNull: true
            }
      });
};