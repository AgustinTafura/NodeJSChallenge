const { Model } = require('sequelize');
const db = require('../database/index');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      Products.belongsTo(db.Categories, {foreignKey: 'id'} );
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.STRING,
    status: DataTypes.STRING,
    seller_user: DataTypes.INTEGER,
    categories: DataTypes.INTEGER,
    transactions: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Products',
    // timestamps: false,
    paranoid: true
  });
  return Products;
};
