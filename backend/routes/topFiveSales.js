const router = require('express').Router();
const verifyToken = require('./jwtVarificationMiddleware');
const mongoose = require('mongoose');
const { User } = require('../models/user');

/**
 * Middleware to retrieve user email by user ID
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next function
 */
const getUserEmailById = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.userEmail = `${user.email}s`;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productQty: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

router.get('/', verifyToken, getUserEmailById, async (req,res)=>{
    try {
        const Order = mongoose.model(req.userEmail, orderSchema);

        const orders = await Order.find({ userId: req.userId });

        const formattedOrders = orders.map((order, index) => ({
            _id: order._id,
            id: index + 1,
            product: order.productName,
            amt: order.productQty,
            price: order.amount,
            dateCreated: order.createdAt.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'})
        }));

        res.json(formattedOrders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
