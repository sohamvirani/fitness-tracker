const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth.controller');

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Export the router for use in other modules
module.exports = router;
