const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Username is mandatory
        unique: true // Must be unique across users
    },
    password: {
        type: String,
        required: true // Password is mandatory
    },
    role: {
        type: String,
        enum: ['Admin', 'User'], // Allowed roles
        default: 'User' // Default role assigned to new users
    },
});

// Create the User model using the defined schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
