const express = require('express');
const router = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = process.env.JWTPRIVATEKEY; // Replace with your secret key (stored securely)

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Assuming token is in Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.userId = decoded.userId; // Store user ID for further use (if applicable)
    next();
  });
};

// Define your validation schema
const schema = Joi.object({
  productName: Joi.string().required(),
  productQty: Joi.number().integer().required(),
  amount: Joi.number().integer().required(),
  id: Joi.string().email().required(),
  datTime: Joi.string().isoDate().required(),
});

// Apply the verifyToken middleware before processing the request
router.post('/', verifyToken, async (req, res) => {
  try {
    // Get current time and calculate IST offset manually (adjust if DST applies)
    const now = new Date();
    const ISTOffset = 330 * 60 * 1000; // Offset for IST (UTC+05:30) in milliseconds
    const nowIST = new Date(now.getTime() + ISTOffset);
    const formattedIST = nowIST.toISOString().slice(0, 19).replace('T', ' ');
    req.datTime = formattedIST;
    console.log(req.body)

    res.json({ message: 'Data processed successfully' });

  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
