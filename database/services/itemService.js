const Item = require("../models/Item");
const User = require("../models/User");

exports.getAll = () => Item.find();

exports.create = (data) => Item.create(data);

exports.edit = (itemId, data) => Item.findByIdAndUpdate(itemId, data);

exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.getOne = (itemId) => Item.findById(itemId);

exports.addToCart = async (userId, itemId) => {
    const user = await User.findById(userId);

    user.cartItems.push(itemId);

    return user.save();
};

exports.removeFromCart = async (userId, itemId) => {
    const user = await User.findById(userId);

    if (user.cartItems.length > 0) {
        user.cartItems = user.cartItems.filter(x => 
            JSON.stringify(x).localeCompare(JSON.stringify(itemId)) != 0);
    }

    return user.save();
};