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

// Initialize express handlebars
app.engine('handlebars', exhbs());

// Set views and specify templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Mount routes
app.use('/', index);
app.use('/users', users);

// Connect to database
require('./config/db');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});