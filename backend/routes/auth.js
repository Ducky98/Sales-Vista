// Dependencies
const router = require('express').Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

// Route for handling user login
router.post('/', async (req, res) => {
  try {
    // Validate user input
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message }); // Send validation error message
    }

    // Find the user with the provided email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: 'User with this Email not found' }); // User not found
    }

    // Compare the provided password with the stored password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid Password' }); // Invalid password
    }

    // Generate authentication token
    const token = user.generateAuthToken();

    // Set authentication cookie with strict security settings
    res.cookie("accessToken", token, {
      httpOnly: true, // Prohibit client-side JavaScript access
      sameSite: "strict", // Mitigate CSRF attacks
    });

    // Send successful login response
    res.status(200).json({ message: 'Login Success' });
  } catch (error) {
    // Handle unexpected errors
    res.send({ message: 'Internal Server Error!' });
  }
});

// Function for validating user data
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'), // Validate email format
    password: Joi.string().required().label('Password'),
  });
  return schema.validate(data);
};

// Export the router module
module.exports = router;
