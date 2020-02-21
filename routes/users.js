const express = require('express');
const router = express.Router();

const User = require('../models/User');

// @route   POST api/users
// @description Register a user
// @access  Public
router.post('/', (request, response) => {
    response.send(request.body);
});

module.exports = router;