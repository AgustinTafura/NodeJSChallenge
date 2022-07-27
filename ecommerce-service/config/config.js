require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  `${process.env.DB_DATABASE}_dev`,
        "host": 'localhost', 
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT,
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  `${process.env.DB_DATABASE}_test`,
        "host": 'localhost', 
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_DATABASE,
        "host": process.env.DB_SERVICE_NAME, // USE ONLY WITH DOCKER-COMPOSE MYSQL SERVICE else USE 'localhost'
        "port": process.env.DB_PORT,
        "dialect": process.env.DB_DIALECT
    }
}
