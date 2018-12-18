const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

module.exports = () => {
    mongoose.connect(process.env.COONECTION_DB)
    .then(() => console.log('connect to db'))
    .catch((error) => console.log(error));
}