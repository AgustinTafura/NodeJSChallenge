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

  let tableName = "Users";

  if (process.env.NODE_ENV === 'test') {
    tableName += "_test";
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
      tableName,
      // timestamps: false,
      paranoid: true,
      
    }
  );

  return Users;
};
