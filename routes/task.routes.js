const tasksController = require('../controller/task.controller');
const express = require('express');
const router = express.Router();

router.post('/api/tasks/createtasks', tasksController.create);
router.get('/api/tasks/gettasks', tasksController.readAll);
router.get('/api/tasks/gettask/:id', tasksController.readOne);
router.put('/api/tasks/updatetask/:id', tasksController.update);
router.delete('/api/tasks/deletetask/:id', tasksController.deleteOneTask);
router.delete('/api/tasks/deletetasks', tasksController.deleteAll);

module.exports = router;
