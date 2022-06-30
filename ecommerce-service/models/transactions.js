const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Users, {foreignKey: 'buyer_user'} );
      Transactions.belongsToMany(models.Products, { through: 'Transactions_Products' } );
    }
  }
  Transactions.init({
    buyer_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Transactions',
    // timestamps: false,
    paranoid: true
  });
  return Transactions;
};
