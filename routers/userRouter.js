const userRouter = require('express').Router();
const UserController = require('../controllers/users.controller');

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getUsers);

module.exports = userRouter;