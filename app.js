// app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db.js');

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
sequelize.sync().then(() => {
  console.log("Database synced");
}).catch(err => {
  console.log("Error:", err);
});

// Routes
//app.use('/', threatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));