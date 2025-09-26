require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
db.sequelize
  .sync()
  .then(() => {
    console.log('✅ Database connected and synced');
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err);
  });

// Routes
app.use('/api/users', require('./routes/userRoute.js'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
