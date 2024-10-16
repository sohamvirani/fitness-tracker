const dotenv = require('dotenv');

dotenv.config();

const jwtSettings = {
  secretKey: process.env.JWT_SECRET,
  tokenLifetime: '9h', // Duration before token expires
};

module.exports = jwtSettings;
