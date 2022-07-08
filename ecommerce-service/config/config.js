require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.ECOMMERCE_MYSQL_DATABASE,
        // "host": process.env.DB_HOST,
        // "host": '127.0.0.1',
        // "host": process.env.ECOMMERCE_MYSQL_NAME,
        "port": process.env.ECOMMERCE_MYSQL_PORT,
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        // "host": process.env.ECOMMERCE_MYSQL_NAME,
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        // "host": process.env.ECOMMERCE_MYSQL_NAME,
        "dialect": "mysql"
    }
}
