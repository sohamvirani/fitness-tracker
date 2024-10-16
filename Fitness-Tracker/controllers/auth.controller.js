const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const jwtConfig = require("../db/jwt");
const { generateToken } = require('../utils/generateToken');

// Handle user registration
const registerNewUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });

        await user.save();
        res.status(201).send('Registration successful for new user.');
    } catch (error) {
        res.status(400).send('Error during registration: ' + error.message);
    }
};

// Handle user login
const loginExistingUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('No user associated with this username.');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).send('Username or password is incorrect.');

        const token = generateToken(user._id, user.role);
        res.json({ token });
    } catch (error) {
        res.status(400).send('Error during login: ' + error.message);
    }
};

module.exports = { registerNewUser, loginExistingUser };
