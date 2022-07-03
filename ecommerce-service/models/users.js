"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Products, {foreignKey: 'seller_user'} );
      Users.hasMany(models.Transactions, {foreignKey: 'buyer_user'} );
      
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "Users",
      // timestamps: false,
      paranoid: true,
      
    }
  );

  return Users;
};
