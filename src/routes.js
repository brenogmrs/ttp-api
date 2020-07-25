const express = require('express');

let CarController = require('./app/controllers/CarController');
CarController = new CarController();

let DriverController = require('./app/controllers/DriverController');
DriverController = new DriverController();

const router = express.Router();

router.post('/cars', CarController.store);
router.put('/cars/:id', CarController.update);
router.delete('/cars/:id', CarController.destroy);
router.get('/cars/?marca=:marca&cor=:cor', CarController.all);
router.get('/cars/:id', CarController.one);
router.get('/cars', CarController.all);

router.post('/drivers', DriverController.store);
router.put('/drivers/:id', DriverController.update);
router.delete('/drivers/:id', DriverController.destroy);
router.get('/drivers/?nome=:nome', DriverController.all);
router.get('/drivers/:id', DriverController.one);
router.get('/drivers', DriverController.all);


module.exports = router;