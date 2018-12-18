const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const validateUser = require('../middlewares/validateUser');
const {User} = require('../models/user');

router.post('/', validateUser,async (request, response) => {
    const {name, email, password} = request.body;
    let user = await User.findOne({email: email});

    if(user){
        return response.status(400).send('User allready exists.');
    }

    user = new User({name,email,password});
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const token = user.genToken();
    response.header('x-token', token).send({name, email});
});

module.exports = router;