const usersController = require('../controllers/users');
const { Router } = require('express');
const express = require('express');
const usersRouter = Router();
const app = express();


usersRouter.get('/', usersController.getUsers);
usersRouter.delete('/:username', usersController.deleteUser);
usersRouter.put('/:username', usersController.EditAccount);
usersRouter.post('/signUp', usersController.postUsers);

module.exports = usersRouter;
