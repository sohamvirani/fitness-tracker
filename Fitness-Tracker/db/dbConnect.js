const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Successfully connected to the database.");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};

module.exports = connectToDatabase;
