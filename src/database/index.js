const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Car = require('../app/models/Car');

const connection = new Sequelize(dbConfig);

Car.init(connection);

module.exports = connection;