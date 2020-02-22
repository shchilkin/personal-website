const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');

const User = require('../models/User');

// @route           POST api/users
// @description     Register a user
// @access          Public
router.post('/',[
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please enter valid email')
        .isEmail(),
    check('password', 'Please enter a password with 6+ characters')
        .isLength({min: 6})

], async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()});
    }

    const {name, email, password}  = request.body;

    try {
        //Is user already exist check
        let user = await User.findOne({email});

        if (user) {
            return response.status(400).json({message:"User already exist!"});
        }

        // If user do not exist, create new user
        user = new User({
            name,
            email,
            password
        });

        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash user's password
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        response.send('user saved');
    } catch (error) {
        console.error(error.message);
        response.status(500).send('Server error');
    }
});

module.exports = router;