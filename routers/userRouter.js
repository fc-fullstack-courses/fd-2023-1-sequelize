const userRouter = require('express').Router();
const UserController = require('../controllers/users.controller');

userRouter.post('/', UserController.createUser);

module.exports = userRouter;