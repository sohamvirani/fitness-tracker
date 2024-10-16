const User = require('../models/user.model');

// Middleware to check for admin privileges
const verifyAdminAccess = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.user.id);

        // Check if user exists and has admin role
        if (!currentUser || currentUser.role !== 'Admin') {
            return res.status(403).send('Access forbidden: Admins only.');
        }

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(500).send('Server Error: ' + error.message);
    }
};

module.exports = verifyAdminAccess;
