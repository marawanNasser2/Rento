const paymentsController = require('../controllers/payments');
const { Router } = require('express');
const express = require('express');
const paymentsRouter = Router();
const app = express();


paymentsRouter.get('/', paymentsController.getPayments);
paymentsRouter.post('/:carPlate', paymentsController.postPayment);

module.exports = paymentsRouter;
