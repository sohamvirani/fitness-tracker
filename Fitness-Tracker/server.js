require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./db/dbConnect");
const authRouter = require('./routes/auth.route');
const workoutsRouter = require('./routes/workout.route');
const goalsRouter = require('./routes/goal.route');
const statsRouter = require('./routes/stats.route');
const adminRouter = require('./routes/admin.route');

const app = express(); // Create an instance of Express

// Use middleware for JSON and URL-encoded data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Set security-related HTTP headers

// Middleware for parsing cookies
app.use(cookieParser());

// Define API routes
app.use('/api/auth', authRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/goals', goalsRouter);
app.use('/api/stats', statsRouter);
app.use('/api/admin', adminRouter);

// Establish connection to the database
connectDB();

// Welcome route
app.get("/", (req, res) => {
  res.send(`
    <center>
      <h1>Welcome to the Fitness Tracker Application</h1>
      <p>For more information, visit the <a href="https://github.com/sohamvirani/fitness-tracker" target="_blank">Fitness Tracker Application Repository</a></p>
    </center>
  `);
});

// Launch the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
