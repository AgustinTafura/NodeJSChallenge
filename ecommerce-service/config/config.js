require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_DATABASE,
        "host": process.env.DB_NAME, // USE ONLY WITH DOCKER-COMPOSE MYSQL SERVICE
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT,
        "logging": false,
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.ECOMMERCE_MYSQL_DATABASE,
        "host": process.env.ECOMMERCE_MYSQL_NAME, // USE ONLY WITH DOCKER-COMPOSE MYSQL SERVICE
        "port": process.env.ECOMMERCE_MYSQL_PORT,
        "dialect": process.env.DB_DIALECT
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.ECOMMERCE_MYSQL_DATABASE,
        "host": process.env.ECOMMERCE_MYSQL_NAME, // USE ONLY WITH DOCKER-COMPOSE MYSQL SERVICE
        "port": process.env.ECOMMERCE_MYSQL_PORT,
        "dialect": process.env.DB_DIALECT
    }
}
