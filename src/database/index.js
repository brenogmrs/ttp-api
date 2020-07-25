const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Car = require('../app/models/Car');
const Driver = require('../app/models/Driver');
const CarUse = require('../app/models/CarUse');


const connection = new Sequelize(dbConfig);

Car.init(connection);
Driver.init(connection);
CarUse.init(connection);

Car.associate(connection.models);
Driver.associate(connection.models);
CarUse.associate(connection.models);



module.exports = connection;