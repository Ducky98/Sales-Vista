// Dependencies
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplex = require('joi-password-complexity');

// Defines the structure of a user document in the database
const UserDataScherma = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

//JWT Token Generation
UserDataScherma.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'});
    return token;
};

// User Model
const User = mongoose.model('userdata', UserDataScherma);

// User Data Validation
const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().label('Last Name'),
        email: Joi.string().required().label('Email'),
        password: passwordComplex().required().label('Password')
    });
    return schema.validate(data);
};

module.exports = {User, validate};