const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    availability: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exprots = Item;