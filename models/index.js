const Sequelize = require('sequelize');
const sequelize = require('../config/db.js'); // import the connection

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models here
db.User = require('./user.js')(sequelize, Sequelize); 

module.exports = db;
