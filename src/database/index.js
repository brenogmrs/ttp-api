const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Car = require('../app/models/Car');
const Driver = require('../app/models/Driver');


const connection = new Sequelize(dbConfig);

Car.init(connection);
Driver.init(connection);


module.exports = connection;