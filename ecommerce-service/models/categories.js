const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.hasMany(models.Products, {foreignKey: 'categories'} );
    }
  }

  let tableName = "Categories";

  if (process.env.NODE_ENV === 'test') {
    tableName += "_test";
  }

  Categories.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Categories',
    tableName,
    // timestamps: false,
    paranoid: true
  });
  return Categories;
};
