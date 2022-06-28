const { Model } = require('sequelize');
const db = require('../database/index');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
            // Categories.hasMany(db.Products);
    }
  }
  Categories.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Categories',
    // timestamps: false,
    paranoid: true
  });
  return Categories;
};