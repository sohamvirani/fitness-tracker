const jwt = require('jsonwebtoken');
const jwtConfig = require('../db/jwt');

// Function to create a JWT token using user ID and role
const createToken = (userId, userRole) => {
    const token = jwt.sign(
        { id: userId, role: userRole },
        jwtConfig.secret,
        { expiresIn: jwtConfig.expiresIn }
    );
    return token;
};

module.exports = { createToken };
