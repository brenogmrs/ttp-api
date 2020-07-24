const express = require('express');
const CarController = require('./app/controllers/CarController');

const router = express.Router();

router.post('/cars', CarController.store)
module.exports = router;