const WorkoutLog = require('../models/workoutlog.model');

// Retrieve workout stats
const retrieveWorkoutStats = async (req, res) => {
    const { startDate, endDate, activity } = req.query;

    let filter = { user: req.user.id };
    
    if (startDate || endDate) {
        filter.date = {};
        if (startDate) filter.date.$gte = new Date(startDate);
        if (endDate) filter.date.$lte = new Date(endDate);
    }
    
    if (activity) {
        filter.activity = activity;
    }

    try {
        const workoutLogs = await WorkoutLog.find(filter);

        // Aggregating statistics
        const caloriesSum = workoutLogs.reduce((sum, log) => sum + log.caloriesBurned, 0);
        const totalTime = workoutLogs.reduce((sum, log) => sum + log.duration, 0);
        const activityList = workoutLogs.map(log => log.activity);
        
        const activityFrequency = activityList.reduce((count, act) => {
            count[act] = (count[act] || 0) + 1;
            return count;
        }, {});

        res.json({
            caloriesSum,
            totalTime,
            activityFrequency,
            totalSessions: workoutLogs.length,
            logs: workoutLogs
        });
    } catch (error) {
        res.status(400).send('Failed to retrieve workout stats: ' + error.message);
    }
};

module.exports = retrieveWorkoutStats;
