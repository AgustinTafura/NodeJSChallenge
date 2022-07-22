const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Categories, {foreignKey: 'categories'} );
      Products.belongsTo(models.Users, {foreignKey: 'seller_user'} );
      Products.belongsToMany(models.Transactions, { through: process.env.NODE_ENV === 'test'?'Transactions_Products_dev':'Transactions_Products' } );
    }
  }

  let tableName = "Products";

  if (process.env.NODE_ENV === 'test') {
    tableName += "_test";
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
    tableName,
    // timestamps: false,
    paranoid: true
  });
  return Products;
};
