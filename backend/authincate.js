
const jwt = require('jsonwebtoken');

const secret = process.env.JWTPRIVATEKEY; 

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
module.exports = verifyToken;

