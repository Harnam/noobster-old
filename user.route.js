const express = require('express');
const router = express.Router();

const control = require('./user.controller');

router.post('/signup', control.signup);

module.exports = router;