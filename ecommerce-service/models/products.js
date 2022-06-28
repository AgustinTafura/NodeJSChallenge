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
      Products.belongsTo(models.Transactions, {foreignKey: 'transactions'} );
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
