const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
} = require('../controllers/goal.controller');

const router = express.Router();

// Apply authentication middleware to all routes related to goals
router.use(authMiddleware);

// Endpoint to create a new goal
router.post('/', createGoal);

// Endpoint to retrieve all user goals
router.get('/', getGoals);

// Endpoint to modify an existing goal by ID
router.put('/:id', updateGoal);

// Endpoint to remove a goal by ID
router.delete('/:id', deleteGoal);

// Exporting the router for use in other parts of the application
module.exports = router;
