const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRouter = require('./routes/authRoutes');
// Middleware
app.use(cors());
app.use(express.json());






//route
app.use('/api/auth', authRouter);






//mogoose connection
mongoose
.connect('mongodb://127.0.0.1:27017/auth')
.then(() => console.log('MongoDB connected'))
.catch((error)=> console.error('MongoDB connection error:', error));




//global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});



//server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});