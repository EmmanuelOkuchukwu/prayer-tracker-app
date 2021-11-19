const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');
const authJwt = require('../middleware/authJwt');
//
// router.get('/user/v1/getusers', UserController.getUsers);
//
router.get('/user/v1/getuser/me', authJwt, UserController.getUser);
//
router.put('/user/v1/updateuser/me', authJwt, UserController.updateUser);
//
// router.put('/user/v1/deleteuser/:id', authJwt, UserController.deleteUser);
//
module.exports = router;
