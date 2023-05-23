const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    cartItems: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }],
    admin: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;