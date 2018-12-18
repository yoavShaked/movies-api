const express = require('express');
const app = express();
const compression = require('compression');
require('express-async-errors');
require('./startup/db')();
require('./startup/routes')(app);
app.use(compression());
app.listen(1234, () => console.log('listen to port 1234'));