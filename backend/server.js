require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();
const connectionDB = require('./db');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const addSales = require('./routes/salesEntry');
const logout = require('./routes/logout');
const topsales = require('./routes/topFiveSales');

// Establish database connection
connectionDB();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // Enable sending cookies from the frontend
}));

// Define routes
app.use('/api/auth', authRoutes); // Login
app.use('/api/user', userRoutes); // Signup
app.use('/api/sales', addSales); // Add sales
app.use('/api/logout', logout); // Logout
app.use('/api/topsales', topsales); // Top sales

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is active on http://localhost:${port}`));
