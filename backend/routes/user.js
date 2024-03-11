const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

// Route for user registration
router.post('/', async (req, res) => {
  try {
    // Validate user input
    const { error } = validate(req.body);

    if (error) {
      // Return a 400 Bad Request with validation error message
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check for existing user with the same email
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      // Return a 409 Conflict if user already exists
      return res.status(409).send({ message: 'User with this email already exists!' });
    }

    // Generate a salt with error handling
    const saltRounds = Number(process.env.SALT) || 10; // Use a default or environment variable
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with error handling
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user and save to database with error handling
    const newUser = new User({ ...req.body, password: hashedPassword });
    // console.log(newUser)
    await newUser.save().catch((saveError) => {
      // Handle any errors during user creation
      console.error('Error saving user:', saveError);
      res.status(500).send({ message: 'Internal Server Error' });
      return; // Prevent further execution
    });

    // Send a 201 Created response with success message
    res.status(201).send({ message: 'User Created Successfully!' });
  } catch (error) {
    // Catch any general errors
    console.error('Error during user registration:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;
