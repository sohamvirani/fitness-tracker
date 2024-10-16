const mongoose = require('mongoose');

// Define the schema for fitness programs
const fitnessProgramSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true // Remove whitespace from both ends
    },
    description: {
        type: String,
        required: true,
        trim: true // Remove whitespace from both ends
    },
    duration: {
        type: Number,
        required: true,
        min: 1 // Minimum duration should be at least 1 week
    }, // Duration specified in weeks
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Reference to the user who created this program
    }
});

// Create the model for the fitness program
const FitnessProgram = mongoose.model('FitnessProgram', fitnessProgramSchema);

// Export the model for use in other parts of the application
module.exports = FitnessProgram;
