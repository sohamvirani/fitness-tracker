const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getWorkoutStatistics } = require('../controllers/stats.controller');

const router = express.Router();

// Apply authentication middleware for all statistics-related routes
router.use(authMiddleware);

// Route to fetch workout statistics
router.get('/', async (req, res, next) => {
    try {
        await getWorkoutStatistics(req, res);
    } catch (error) {
        next(error); // Forward the error to the designated error handler
    }
});

// Exporting the router to be used in the application
module.exports = router;
