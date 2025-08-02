const { Schema, Types } = require('mongoose');

const OrdersSchema = new Schema({
    name: {
        type: String,
        required: [true, "Order name is required."]
    },
    qty: {
        type: Number,
        required: [true, "Quantity is required."],
        min: [1, 'Quantity must be at least 1.']
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [0.01, 'Price must be positive.']
    },
    mode: {
        type: String,
        required: [true, "Order mode is required."],
        enum: {
            values: ['buy', 'sell', 'BUY', 'SELL'],
            message: 'Mode must be either "buy" or "sell".'
        } 
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, "User ID is required for the order."]
    }
}, { timestamps: true });

module.exports = { OrdersSchema };