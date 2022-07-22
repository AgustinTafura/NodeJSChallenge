'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config')[process.env.NODE_ENV || 'development'];
const mysql = require('mysql2/promise');
const pathModels = __dirname + '/../models'
const db = {};


initialize();

async function initialize() {

  const { host, port, username, password, database, dialect } = config;

  // create db if it doesn't already exist
  const connection = await mysql.createConnection({
    host:process.env.NODE_ENV ? host : 'localhost',
    user:username,
    password,
    });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, username, password, {
    dialect,
    // host // USE ONLY WITH DOCKER-COMPOSE MYSQL SERVICE
    // logging,
  });

  // init models and add them to the exported db object
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

  // sync all models with database
  sequelize.sync({
    alter: false,
  })
  .then(function() {
    console.log(`DB connection sucessful on port ${sequelize.config.port}`);
  })
  .catch(error => {
    console.log("Couldn't sync database", error);
  });
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

}




module.exports = db;
