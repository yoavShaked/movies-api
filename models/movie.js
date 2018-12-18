const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:255
    },
    poster:{
        type:String,
        maxlength:255
    },
    director:{
        type:String,
        maxlength:255
    },
    genre:{
        type:String,
        maxlength:255
    },
    runtime:{
        type:Number,
    },
});

const validateMovie = (movie) => {
    return Joi.validate(movie, {
        title: Joi.string().max(255).required(),
        poster: Joi.string().max(255),
        director: Joi.string().max(255),
        genre: Joi.string().max(255),
        runtime: Joi.number()
    });
}

module.exports = {
    movieSchema,
    validateMovie
}