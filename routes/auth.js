const router = require('express').Router();
const validateUser = require('../middlewares/validateUser');
const checkAuth = require('../middlewares/checkAuth');

router.post('/',validateUser, checkAuth, async (request, response) => {
    const {user} = request;
    const token = user.genToken();
    response.header('x-auth', token).send({name:user.name, email: user.email});
});


module.exports = router;