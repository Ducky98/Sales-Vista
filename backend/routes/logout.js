const router = require('express').Router();

// Route for user logout
router.get("/", (req, res) => {
  // Clear the access token cookie with appropriate settings
  res.clearCookie("accessToken", {
    httpOnly: true,
    expires: new Date(0), // Set expiration in the past to delete
  });

  // Send successful logout response
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
