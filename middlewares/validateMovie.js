const {validateMovie} = require('../models/movie');

module.exports = (request, response, next) => {
    const {error} = validateMovie(request.body);
    if(error){
        response.status(400).send(error.details[0].message);
    }
    else{
        next();
    }
}