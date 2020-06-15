require('dotenv').config();

const express  = require('express'),
      mongoose = require('mongoose'),
      path     = require('path'),
      exphbs   = require('express-handlebars');

// Initialize Express
const app = express();

// Require routes
const index = require('./routes/index');
const users = require('./routes/users');

// Set global promise
mongoose.Promise = global.Promise;

// Connect to database
require('./config/db');

// Initialize express handlebars
app.engine('handlebars', exphbs());

// Set views and specify templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Use public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/', index);
app.use('/users', users);

// Specify port. Use port from .env file, otherwise use 5000
const port = process.env.PORT || 5000;

// Listen on port and send confirmation that the server is running
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});