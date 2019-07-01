const express = require('express');
const app = express();


const pageRoutes = require('./routes/pages');
const beersRoutes = require('./routes/beers');


app.use('/', pageRoutes);
app.use('/beers', beersRoutes);


module.exports = app;