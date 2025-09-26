// require('dotenv').config();
// const { Sequelize } = require('sequelize');

// // Encode password to handle special chars like @
// const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   dbPassword,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     logging: false, // set true if you want SQL logs
//   }
// );

// module.exports = sequelize;


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "lurn",        // Database name
  "root",        // DB user
  "Beldar@123",  // DB password
  {
    host: "localhost",
    dialect: "mysql",
    logging: false, // true if you want SQL queries in console
  }
);

module.exports = sequelize;
