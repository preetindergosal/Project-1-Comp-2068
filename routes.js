const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');
const beersRoutes = require('./routes/beers');

// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/beers', beersRoutes);

// Export our changes
module.exports = app;