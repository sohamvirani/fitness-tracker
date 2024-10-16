const mongoose = require('mongoose');

// Define the schema for user goals
const goalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Reference to the user associated with this goal
    },
    target: {
        type: String,
        required: true // E.g., "Run 5km", "Lose 5kg"
    },
    targetValue: {
        type: Number,
        required: true // The value to achieve
    },
    currentValue: {
        type: Number,
        default: 0 // Initial value set to zero
    },
    frequency: {
        type: String,
        enum: ['weekly', 'monthly'], // Frequency of goal tracking
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now // Default start date is now
    },
    endDate: {
        type: Date // Optional end date for the goal
    }
});

// Create the Goal model from the schema
const Goal = mongoose.model('Goal', goalSchema);

// Export the Goal model for use in other parts of the application
module.exports = Goal;
