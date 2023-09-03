const itemService = require('../services/itemService');

exports.getItems = async (req, res) => {
    try {
        const items = await itemService.getAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(404);
        res.send(error);
    }
};

exports.createItem = async (req, res) => {
    const data = req.body;

    try {
        let createdItem = await itemService.create(data);
        res.status(200).json(createdItem);
    } catch (error) {
        res.status(400);
        res.send(error);
    }
};

exports.editItem = async (req, res) => {
    const data = req.body;
    const itemId = req.params.id;

    try {
        const editedItem = await itemService.edit(itemId, data);
        res.status(200).json(editedItem);
    } catch (error) {
        res.status(400);
        res.send(error);
    }
};

exports.deleteItem = async (req, res) => {
    const itemId = req.params.id;

    try {
        let deletedItem = await itemService.delete(itemId);
        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(400);
        res.send(error);
    }
};

exports.getOneItem = async (req, res) => {
    const itemId = req.params.id;

    try {
        const item = await itemService.getOne(itemId);
        res.status(200).json(item);
    } catch (error) {
        res.status(400);
        res.send(error);
    }
};

exports.addToCart = async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.params.userId;

    try {
        const itemAdded = await itemService.addToCart(userId, itemId);
        res.status(200).json(itemAdded);
    } catch (error) {
        res.status(400);
        res.send(error);
    }
};

exports.removeFromCart = async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.params.userId;

    try{
        const itemRemoved = await itemService.removeFromCart(userId, itemId);
        res.status(200).json(itemRemoved);
    }catch(error){
        res.status(400);
        res.send(error);
    }
};