const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//route

//mogoose connection
mongoose
.connect('mongodb://127.0.0.1:27017/authentication')
.then(() => console.log('MongoDB connected'))
.catch((error)=> console.error('MongoDB connection error:', error));
//global error handler

//server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});