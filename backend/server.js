require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectionDB = require('./db');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const addSales = require('./routes/salesEntry');

//Databse Connection
connectionDB();

//Middlewares
app.use(express.json());
app.use(cors());

//PORT
const port = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/sales', addSales);


app.listen(port, () => console.log(`Server is active on  http://localhost:${port}`));