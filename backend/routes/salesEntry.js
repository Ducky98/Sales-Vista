const verifyToken = require('./jwtVarificationMiddleware');
const { User } = require('../models/user');
const router = require('express').Router();
const mongoose = require('mongoose');

// Define schema for sales
const saleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDatas',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productQty: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
}, { timestamps: true }); // Include timestamps for each sale

// Route to add a new sale
router.post("/", verifyToken, async (req, res) => {
  try {
    const { productName, productQty, amount } = req.body;
    const userId = req.userId;
    const existingUser = await User.findById(userId);

    const SaleDetails = mongoose.model(existingUser.email, saleSchema);

    if (productName && productQty && amount && userId) {
      const sale = {
        userId, // Ensure unique numbering
        productName,
        productQty,
        amount,
      };
      const newSale = new SaleDetails(sale);

      await newSale.save(); // Wait for the save operation to complete before proceeding

      return res.status(201).json({ message: "Sale added" });
    } else {
      return res.status(400).json({ message: "Bad request" });
    }
  } catch (error) {
    console.error("Error creating sale:", error);
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
