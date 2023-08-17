const taskRouter = require('express').Router();
const TaskController = require('../controllers/tasks.controller');

taskRouter.post('/', TaskController.createTask);
taskRouter.get('/', TaskController.getAllUserTasks);

taskRouter.get('/:taskId', TaskController.getTask);
taskRouter.put('/:taskId', TaskController.updateTask);
taskRouter.delete('/:taskId', TaskController.deleteTask);

module.exports = taskRouter;