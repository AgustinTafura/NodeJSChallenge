'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config').development;
const pathModels = __dirname + '/../models'
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
  // host: config.host,
  logging: false,
});
fs
  .readdirSync(pathModels)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(pathModels, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


sequelize.sync({
  alter: false,
})
  .then(function() {
    console.log('DB connection sucessful.');
  })
  .catch(error => {
    console.log("Couldn't sync database", error);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
