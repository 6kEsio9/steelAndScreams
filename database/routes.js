const router = require('express').Router();

const userController = require('./controllers/userController.js');
const itemController = require('./controllers/itemController.js');

const { isAuth } = require('./middlewares/authMiddleware.js');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getOneItem);
router.get('/items/addToCart/:userId/:itemId', isAuth, itemController.addToCart);
router.get('/items/removeFromCart/:userId/:itemId', isAuth, itemController.removeFromCart);

router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.post('/items/create', isAuth, itemController.createItem);

router.put('/items/edit/:id', isAuth, itemController.editItem);
router.delete('/items/delete/:id', isAuth, itemController.deleteItem);

module.exports = router;