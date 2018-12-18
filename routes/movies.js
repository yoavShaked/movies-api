const router = require('express').Router();
const auth = require('../middlewares/auth');
const {User} = require('../models/user');
const validateMovie = require('../middlewares/validateMovie');

router.get('/', auth, async (request, response) => {
    const user = await User.findById(request.user);
    response.send(user.movies);
});

router.post('/', auth, validateMovie, async (request, response) => {
    const user = await User.findById(request.user);
    user.movies.push(request.body);
    await user.save();
    response.send(user.movies);
});

router.put('/', auth, validateMovie, async (request, response) => {
    const {poster,director,title, genre, runtime} = request.body;
    const user = await User.findById(request.user);
    const {movies} = user;

    for(let i = 0; i < movies.length; i++){
        if(movies[i] && movies[i].title === title){
            movies[i].title = title;
            movies[i].poster = poster;
            movies[i].runtime = runtime;
            movies[i].genre = genre;
            movies[i].director = director;
        }
    }

    await user.save();
    response.send(user.movies);
});

router.delete('/:id', auth, async (request, response) => {
    const user = await User.findById(request.user);
    user.movies = user.movies.filter(movie => movie._id !== request.params.id);
    await user.save();
    response.send(user.movies);
});


module.exports = router;