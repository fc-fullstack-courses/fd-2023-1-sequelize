const userRouter = require('express').Router();
const UserController = require('../controllers/users.controller');

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getUsers);

userRouter.get('/:userId', UserController.getUser);

module.exports = userRouter;