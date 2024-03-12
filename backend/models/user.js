// Dependencies
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplex = require('joi-password-complexity');

// Define the User model schema
const UserDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },  // First name of the user
  lastName: { type: String, required: false }, // Last name of the user (optional)
  email: { type: String, required: true, unique: true }, // User's email address (must be unique)
  password: { type: String, required: true }  // User's password
});

// Generate a JWT token for a user
UserDataSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: '7d' });
  return token;
};

// Create the Mongoose model for users
const User = mongoose.model('userdata', UserDataSchema);

// Validate user data against a Joi schema
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label('First Name'),
    lastName: Joi.string().label('Last Name'),
    email: Joi.string().required().email().label('Email'), // Ensure email format with Joi.email()
    password: passwordComplex().required().label('Password')
  });
  return schema.validate(data);
};

// Export the User model and validation function
module.exports = { User, validate };
