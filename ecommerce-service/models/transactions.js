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
      Transactions.belongsToMany(models.Products, { through: process.env.NODE_ENV === 'test'?'Transactions_Products_dev':'Transactions_Products' } );
    }
  }

  let tableName = "Transactions";

  if (process.env.NODE_ENV === 'test') {
    tableName += "_test";
  }

  Transactions.init({
    buyer_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Transactions',
    tableName,
    // timestamps: false,
    paranoid: true
  });
  return Transactions;
};
