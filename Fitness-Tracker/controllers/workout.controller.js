const WorkoutLog = require('../models/workoutlog.model');

// Log a new workout entry
const logNewWorkout = async (req, res) => {
    const { activity, duration, caloriesBurned } = req.body;
    const workoutEntry = new WorkoutLog({ user: req.user.id, activity, duration, caloriesBurned });

    try {
        await workoutEntry.save();
        res.status(201).json(workoutEntry);
    } catch (error) {
        res.status(400).send('Failed to create workout entry: ' + error.message);
    }
};

// Fetch all workout logs of a user
const retrieveWorkoutLogs = async (req, res) => {
    try {
        const userLogs = await WorkoutLog.find({ user: req.user.id });
        res.json(userLogs);
    } catch (error) {
        res.status(400).send('Unable to retrieve workout logs: ' + error.message);
    }
};

// Modify a workout log entry
const modifyWorkoutLog = async (req, res) => {
    const { id } = req.params;
    const { activity, duration, caloriesBurned } = req.body;

    try {
        const updatedEntry = await WorkoutLog.findByIdAndUpdate(
            id,
            { activity, duration, caloriesBurned },
            { new: true }
        );
        res.json(updatedEntry);
    } catch (error) {
        res.status(400).send('Failed to update workout log: ' + error.message);
    }
};

// Remove a workout log entry
const removeWorkoutLog = async (req, res) => {
    const { id } = req.params;

    try {
        await WorkoutLog.findByIdAndDelete(id);
        res.json({ message: 'Workout log removed successfully.' });
    } catch (error) {
        res.status(400).send('Failed to delete workout log: ' + error.message);
    }
};

module.exports = { logNewWorkout, retrieveWorkoutLogs, modifyWorkoutLog, removeWorkoutLog };
