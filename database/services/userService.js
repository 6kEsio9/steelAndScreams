const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const secret = 'gh937fh3r90fj39fuj3r';
const saltRounds = 10;

const jwtSign = promisify(jwt.sign);

exports.getAll = () => User.find();

exports.getOne = (userId) => User.findById(userId);

exports.register = async ({ fullName, email, password, address, gender, dateOfBirth }) => {
    let hashedPassword;

    if (password.length >= 8) {
        hashedPassword = await bcrypt.hash(password, saltRounds);
    } else {
        throw { message: "Password should be at least 8 characters." };
    }

    let createdUser = await User.create({
        fullName,
        email,
        password: hashedPassword,
        address,
        gender,
        dateOfBirth,
        admin: false
    });

    let token = await jwtSign({
        _id: createdUser._id,
        fullName: createdUser.fullName,
        email: createdUser.email,
        address: createdUser.address,
        gender: createdUser.gender,
        dateOfBirth: createdUser.dateOfBirth,
        admin: createdUser.admin
    }, secret, { expiresIn: "3d"});

    return { token, createdUser };
}

exports.login = async ({email, password}) => {
    const user = await User.findOne({email});

    if (!user) {
        throw { message: 'Cannot find email.'};
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw { message: 'Cannot find email or password'};
    }

    let token = await jwtSign({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        address: user.address,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        admin: user.admin
    }, secret, { expiresIn: '3d'});

    return { token, user };
}