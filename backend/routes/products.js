const productsController = require('../controllers/products');
const { Router } = require('express');
const express = require('express');
const productsRouter = Router();
const app = express();


productsRouter.get('/', productsController.getProducts);
productsRouter.post('/', productsController.addProducts);

module.exports = productsRouter;
