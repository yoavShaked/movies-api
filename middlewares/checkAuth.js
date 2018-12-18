const bcrypt = require('bcrypt');
const {User} = require('../models/user');

module.exports = async (request, response, next) => {
    const {email, password} = request.body;

    const user = await User.findOne({email});
    if(!user){
        return response.status(400).send('Invalid email or password.');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword){
        return response.status(400).send('Invalid email or password.');
    }

    request.user = user;
    next();
}