const jwt = require('jsonwebtoken');

// Middleware to authenticate users via JWT
const authenticateUser = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader ? authHeader.replace('Bearer ', '') : null;

    // Check if token is present
    if (!token) {
        return res.status(401).send('Unauthorized access: No token provided.');
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to the request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        res.status(400).send('Token is invalid or expired.');
    }
};

module.exports = authenticateUser;
