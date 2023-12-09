const express = require('express');
const dotenv = require('dotenv');
const PORT_NUMBER = 3000;

dotenv.config({
    path: './config/.env'
});

const app = express();
const initiateDBConnection = require('./config/db');
const PORT = process.env.PORT;


//Users
const usersRouter = require('./routes/users');
app.use('/Users', usersRouter);


//Admins
const adminsRouter = require('./routes/admins');
app.use('/Admins', adminsRouter);


//Cars
const carsRouter = require('./routes/cars');
app.use('/Cars', carsRouter);


//Products
const productsRouter = require('./routes/products');
app.use('/Products', productsRouter);


//Payments
const paymentsRouter = require('./routes/payments');
app.use('/Payments', paymentsRouter);


app.use(express.json());


app.listen(PORT, async() => {
    console.log('Server started and listening to port:', PORT);
    await initiateDBConnection();
});