const users = require('../routes/users');
const auth = require('../routes/auth');
const movies = require('../routes/movies');
const cors = require('cors');
const express = require('express');
const error = require('../middlewares/error');

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/movies', movies);
    app.use(error);
}