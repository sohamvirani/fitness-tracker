const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware'); // Admin role verification
const {
  getAggregateStatistics,
  getAllUsers,
  createFitnessProgram,
  getFitnessPrograms,
  updateFitnessProgram,
  deleteFitnessProgram,
} = require('../controllers/admin.controller');

const router = express.Router();

// Apply authentication middleware to all admin routes
router.use(authMiddleware);
// Apply admin middleware to restrict access to admins only
router.use(adminMiddleware);

// Route to fetch aggregate statistics
router.get('/statistics', getAggregateStatistics);

// Route to retrieve all registered users
router.get('/users', getAllUsers);

// Fitness program management routes
router.post('/programs', createFitnessProgram); // Endpoint to create a new fitness program
router.get('/programs', getFitnessPrograms); // Endpoint to retrieve all fitness programs
router.put('/programs/:id', updateFitnessProgram); // Endpoint to update an existing fitness program
router.delete('/programs/:id', deleteFitnessProgram); // Endpoint to remove a fitness program

// Export the configured router
module.exports = router;
