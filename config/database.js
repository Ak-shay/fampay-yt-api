require('dotenv').config();

const { Sequelize, DataTypes, Model, NOW } = require('sequelize');

module.exports = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST_NAME,
        dialect: 'mysql'
});
