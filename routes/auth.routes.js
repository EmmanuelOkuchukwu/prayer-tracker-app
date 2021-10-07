const express = require('express');
const router = express.Router();
const AuthRoute = require('../controller/auth.controller');

router.post('/auth/v1/register', AuthRoute.register);

module.exports = router;
