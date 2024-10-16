const User = require('../models/user.model');
const WorkoutLog = require('../models/workoutlog.model');
const FitnessProgram = require('../models/fitnessprogram.model');

// Retrieve overall statistics for all users
const fetchOverallStats = async (req, res) => {
    try {
        const usersCount = await User.countDocuments();
        const workoutSessions = await WorkoutLog.countDocuments();
        const caloriesSummary = await WorkoutLog.aggregate([
            { $group: { _id: null, totalCalories: { $sum: "$caloriesBurned" } } }
        ]);

        res.json({
            usersCount,
            workoutSessions,
            totalCaloriesBurned: caloriesSummary[0]?.totalCalories || 0
        });
    } catch (error) {
        res.status(400).send('Failed to fetch overall statistics: ' + error.message);
    }
};

// Retrieve list of all users
const listAllUsers = async (req, res) => {
    try {
        const userList = await User.find();
        res.json(userList);
    } catch (error) {
        res.status(400).send('Failed to retrieve users: ' + error.message);
    }
};

// Add a new fitness program
const addNewFitnessProgram = async (req, res) => {
    const { title, description, duration, level } = req.body;
    const fitnessProgram = new FitnessProgram({ title, description, duration, level, user: req.user.id });

    try {
        await fitnessProgram.save();
        res.status(201).json(fitnessProgram);
    } catch (error) {
        res.status(400).send('Failed to create fitness program: ' + error.message);
    }
};

// Retrieve all fitness programs
const fetchAllFitnessPrograms = async (req, res) => {
    try {
        const programList = await FitnessProgram.find();
        res.json(programList);
    } catch (error) {
        res.status(400).send('Failed to fetch fitness programs: ' + error.message);
    }
};

// Modify a fitness program
const modifyFitnessProgram = async (req, res) => {
    const { id } = req.params;
    const { title, description, duration, level } = req.body;

    try {
        const updatedFitnessProgram = await FitnessProgram.findByIdAndUpdate(
            id,
            { title, description, duration, level },
            { new: true }
        );
        res.json(updatedFitnessProgram);
    } catch (error) {
        res.status(400).send('Failed to update fitness program: ' + error.message);
    }
};

// Remove a fitness program
const removeFitnessProgram = async (req, res) => {
    const { id } = req.params;

    try {
        await FitnessProgram.findByIdAndDelete(id);
        res.json({ message: 'Fitness program successfully removed.' });
    } catch (error) {
        res.status(400).send('Failed to delete fitness program: ' + error.message);
    }
};

module.exports = { fetchOverallStats, listAllUsers, addNewFitnessProgram, fetchAllFitnessPrograms, modifyFitnessProgram, removeFitnessProgram };
