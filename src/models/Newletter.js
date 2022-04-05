const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Newletter extends Model {}
  Newletter.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Newletter",
      timestamps: false,
    }
  );
};
