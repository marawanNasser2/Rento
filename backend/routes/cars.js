const carsController = require('../controllers/cars');
const { Router } = require('express');
const express = require('express');
const carsRouter = Router();
const app = express();


carsRouter.get('/', carsController.getCars);
carsRouter.post('/', carsController.postCars);
carsRouter.delete('/:carPlate', carsController.deleteCar);
carsRouter.get('/:username', carsController.findMyCars);
carsRouter.put('/:carPlate', carsController.EditCar);

module.exports = carsRouter;
