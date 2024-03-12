const mongoose = require('mongoose');

/**
 * Function to establish connection with MongoDB
 */
module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB); 
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};
