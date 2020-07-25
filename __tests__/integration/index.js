const Sequelize = require('sequelize');
const request = require('supertest');
const app = require('../../src/app');

const dbConfig = require('../../src/config/database');

const connection = new Sequelize(dbConfig);


module.exports = {connection, request, app};