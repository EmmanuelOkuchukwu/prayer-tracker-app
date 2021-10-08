const express = require('express');
const router = express.Router();
const AuthRoute = require('../controller/auth.controller');

router.post('/auth/v1/register', AuthRoute.register);
router.post('/auth/v1/login', AuthRoute.login);

module.exports = router;
