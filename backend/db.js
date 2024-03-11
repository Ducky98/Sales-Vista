const mongoose = require('mongoose');

module.exports = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log('Database is connected!!!!!!');
  } catch (error) {
    console.error(`Failed to connect to MongoDB: ${error.message}`);
  }
};
