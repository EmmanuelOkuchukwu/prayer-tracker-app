const express = require('express');
const router = express.Router();
const authJwt = require("../middleware/authJwt");
const { createProfile, getMyProfile } = require('../controller/profile.controller');

router.post('/api/profile/createprofile', authJwt, createProfile);
router.get('/api/profile/me', authJwt, getMyProfile);

module.exports = router;
