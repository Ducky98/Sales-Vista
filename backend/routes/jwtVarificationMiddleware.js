const jwt = require('jsonwebtoken');

// Middleware function for verifying JWT access token
const verifyToken = (req, res, next) => {
  // Extract access token from cookies
  const token = req.cookies.accessToken;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Access token required" }); // Clearer error message
  }

  try {
    // Verify the token using JWT secret key
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);

    // Attach decoded user ID to the request object
    req.userId = decoded._id;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid or expired tokens
    return res.status(401).json({ message: "Invalid token" }); // Generic error message for security
  }
};

module.exports = verifyToken;
