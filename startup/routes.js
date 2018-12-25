const users = require('../routes/users');
const auth = require('../routes/auth');
const movies = require('../routes/movies');
const cors = require('cors');
const express = require('express');
const error = require('../middlewares/error');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/movies', movies);
    app.use(error);
}