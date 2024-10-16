# Fitness Tracker Application

## Introduction

The Fitness Tracker Application provides users with the capability to log their workouts, set fitness goals, and monitor their progress. Administrators have the privileges to manage user accounts, establish fitness programs, and access aggregate statistics.

## Key Features

- JWT-based user authentication
- Role-based access control (Admin and User)
- Workout management and logging
- Goal creation and tracking
- Aggregate statistics viewable by admins
- Fitness program development and management

## Live Demo

**[Live URL Placeholder](http://your-live-url.com)**

> Update this placeholder with the actual URL where your application is hosted.

## Technology  Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for secure authentication
- Postman for API testing

# Setup Guide

### Requirements

- Node.js (version 14 or above)
- MongoDB (either Atlas or local setup)
- Postman (for testing APIs)

### Repository Cloning

git clone https://github.com/your-username/fitness-tracker-backend.git
cd fitness-tracker-backend


# Installing Dependencies
npm install

# Create a .env file with the following configuration:

# Database Configuration
MONGO_URL=mongodb://<username>:<password>@your-mongodb-url:27017/fitness-tracker

# JWT Secret Key
JWT_SECRET=your_jwt_secret_key

# Launching the Server
PORT=5000

# Start the Server
npm start

# Acknowledgements
Node.js
Express.js
MongoDB
Postman
