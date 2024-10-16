const mongoose = require('mongoose');

// Define the schema for workout logs
const workoutLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true // User ID is necessary
    },
    activity: {
        type: String,
        required: true // Activity type is necessary
    },
    duration: {
        type: Number,
        required: true // Duration in minutes
    },
    caloriesBurned: {
        type: Number,
        required: true // Calories burned during the activity
    },
    date: {
        type: Date,
        default: Date.now // Default date is the current date
    },
});

// Create the WorkoutLog model from the schema
const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema);

// Export the WorkoutLog model for use in other modules
module.exports = WorkoutLog;
