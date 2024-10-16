const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
    createWorkoutLog,
    getWorkoutLogs,
    updateWorkoutLog,
    deleteWorkoutLog,
} = require('../controllers/workout.controller');

const router = express.Router();

// Apply authentication middleware to secure all routes related to workouts
router.use(authMiddleware);

// Route to log a new workout entry
router.post('/', createWorkoutLog); 

// Route to retrieve all workout logs
router.get('/', getWorkoutLogs); 

// Route to modify an existing workout log by ID
router.put('/:id', updateWorkoutLog); 

// Route to remove a workout log by ID
router.delete('/:id', deleteWorkoutLog); 

// Export the router to make it available for use in the main application
module.exports = router;
