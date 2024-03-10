require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectionDB = require('./db');

//Databse Connection
connectionDB();

//Middlewares
app.use(express.json());
app.use(cors());

//PORT
const port = process.env.PORT || 5000;

app.get('/', (req,res) =>{
    res.status(200).end('Working');
})
app.listen(port, () => console.log(`Server is active on  http://localhost:${port}`));