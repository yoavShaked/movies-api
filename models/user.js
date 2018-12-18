const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
const {movieSchema} = require('./movie');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minlength:4,
        maxlength:255
    },
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:255
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        maxlength:255
    },
    movies:[movieSchema]
});

userSchema.methods.genToken = function(){
    return jwt.sign({_id: this._id}, process.env.JWT_PRIVATE_KEY);
}

const User = mongoose.model('User', userSchema);

const validateUser = user => {
    return Joi.validate(user, {
        email: Joi.string().email().min(4).max(255).required(),
        name: Joi.string().min(4).max(255).required(),
        password: Joi.string().min(4).max(255).required(),
    });
}

module.exports = {
    User,
    validateUser
}