const express = require('express');
const router = express.Router();
const authJwt = require("../middleware/authJwt");
const { createProfile, getMyProfile, deleteUser } = require('../controller/profile.controller');

router.post('/api/profile/createprofile', authJwt, createProfile);
router.get('/api/profile/me', authJwt, getMyProfile);
router.delete('/api/profile/deleteme', authJwt, deleteUser);

module.exports = router;
