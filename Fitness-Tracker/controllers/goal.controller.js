const Goal = require('../models/goal.model');

// Handler for creating a new goal
const addGoal = async (req, res) => {
    const { target, targetValue, frequency, endDate } = req.body;
    const goalEntry = new Goal({
        user: req.user.id,
        target,
        targetValue,
        frequency,
        endDate
    });

    try {
        await goalEntry.save();
        res.status(201).json(goalEntry);
    } catch (error) {
        res.status(400).send('Unable to create goal: ' + error.message);
    }
};

// Fetch goals associated with a user
const fetchUserGoals = async (req, res) => {
    try {
        const userGoals = await Goal.find({ user: req.user.id });
        res.json(userGoals);
    } catch (error) {
        res.status(400).send('Unable to retrieve goals: ' + error.message);
    }
};

// Modify an existing goal
const modifyGoal = async (req, res) => {
    const { id } = req.params;
    const { targetValue, currentValue } = req.body;

    try {
        const goalUpdate = await Goal.findByIdAndUpdate(
            id,
            { targetValue, currentValue },
            { new: true }
        );
        res.json(goalUpdate);
    } catch (error) {
        res.status(400).send('Unable to update goal: ' + error.message);
    }
};

// Remove a goal
const removeGoal = async (req, res) => {
    const { id } = req.params;

    try {
        await Goal.findByIdAndDelete(id);
        res.json({ message: 'Goal successfully removed.' });
    } catch (error) {
        res.status(400).send('Unable to delete goal: ' + error.message);
    }
};

module.exports = {
    addGoal,
    fetchUserGoals,
    modifyGoal,
    removeGoal
};
