const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @description Get logged in user
// @access  Private
router.get('/', (request, response) => {
    response.send('Get logged in a user');
});

// @route   POST api/auth
// @description Auth user and get token
// @access  Public
router.post('/', (request, response) => {
    response.send('Register a user');
});

module.exports = router;

module.exports = router;