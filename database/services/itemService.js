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