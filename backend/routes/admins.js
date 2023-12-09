const adminsController = require('../controllers/admins');
const { Router } = require('express');
const express = require('express');
const adminsRouter = Router();
const app = express();


adminsRouter.get('/', adminsController.getAdmins);
adminsRouter.post('/', adminsController.postAdmins);
adminsRouter.get('/',adminsController.viewPendingPayments);
adminsRouter.delete('/username', adminsController.banUser);

module.exports = adminsRouter;
