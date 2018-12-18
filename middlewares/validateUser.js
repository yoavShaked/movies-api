const {validateUser} = require('../models/user');
module.exports = (request, response, next) => {
    const {error} = validateUser(request.body);
    if(error){
        response.status(400).send(error.details[0].message);
    }
    else{
        next();
    }
}