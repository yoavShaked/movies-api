const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

module.exports = (request, response, next) => {
    const token = request.header('x-auth');
    if(!token){
        return response.status(401).send('Access denide. No token provided.');
    }
    try{
        const decodePayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        request.user = decodePayload;
        next();
    }
    catch(ex){
        response.status(400).send('Invalid token.');
    }
}