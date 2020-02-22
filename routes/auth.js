const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');

const User = require('../models/User');
const jwtSecret = process.env.JWT_SECRET;

// @route           GET api/auth
// @description     Get logged in user
// @access          Private
router.get('/', (request, response) => {
    response.send('Get logged in a user');
});

// @route           POST api/auth
// @description     Auth user and get token
// @access          Public
router.post('/', [
    check('email', 'Please include an email').isEmail(),
    check('password', 'password is required').exists()
    ], async (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()){
            return response.status(400).json({errors: errors.array()});
        }

        const { email, password } = request.body;

        try {
            let user = await User.findOne({email});

            if (!user){
                return response.status(400).json({message:'Invalid credentials'})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return response.status(400).json({message:'Invalid credential'})
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(payload, jwtSecret, {
                expiresIn: 3600
            }, (error, token) => {
                if (error) throw error;
                response.json({token});

            })
        } catch (error) {
            console.error(error.message);
            response.status(500).send('Server error');
        }
    }
);

module.exports = router;