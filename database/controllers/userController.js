const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(404);
        res.send(error);
    }
};

exports.getUser = async (req, res) => {

    const userId = req.params.id;

    try {
        const user = await userService.getOne(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404);
        res.send(error);
    }
};

exports.loginUser = async (req, res) => {
    const data = req.body;

    try {
        let { token, user } = await userService.login(data);
        res.cookie('user', token, { httpOnly: true });
        res.status(200)
            .json({
                token,
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                address: user.address,
                gender: user.gender,
                dateOfBirth: user.dateOfBirth,
                cartItems: user.cartItems,
                admin: user.admin
            });
    } catch (error) {
        res.status(400);
        res.send(error);
    }
};

exports.registerUser = async (req, res) => {
    const data = req.body;

    try{
        let { token, createdUser } = await userService.register(data);
        res.cookie('user', token, { httpOnly: true });
        res.status(200)
            .json({
                token,
                _id: createdUser._id,
                fullName: createdUser.fullName,
                email: createdUser.email,
                address: createdUser.address,
                gender: createdUser.gender,
                dateOfBirth: createdUser.dateOfBirth,
                cartItems: createdUser.cartItems,
                admin: createdUser.admin
            })
    } catch (error){
        res.status(400);
        res.send(error);
    };
};