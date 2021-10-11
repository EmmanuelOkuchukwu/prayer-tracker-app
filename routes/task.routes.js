const tasksController = require('../controller/task.controller');
const express = require('express');
const router = express.Router();
const authJwt = require("../middleware/authJwt");

router.post('/api/tasks/createtasks', authJwt, tasksController.create);
router.get('/api/tasks/gettasks', authJwt, tasksController.readAll);
router.get('/api/tasks/gettask/:id', authJwt, tasksController.readOne);
router.get('/api/tasks/readMyTasks', authJwt, tasksController.readMyTasks)
router.put('/api/tasks/updatetask/:id', authJwt, tasksController.update);
router.delete('/api/tasks/deletetask/:id', authJwt, tasksController.deleteOneTask);
router.delete('/api/tasks/deletetasks', authJwt, tasksController.deleteAll);

module.exports = router;
