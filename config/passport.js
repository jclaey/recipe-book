const LocalStrategy = require('passport-local').Strategy,
      passport      = require('passport'),
      mongoose      = require('mongoose'),
      bcrypt        = require('bcryptjs'),
      User          = require('../models/User');

module.exports = function(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Look in DB to find email that matches
    User.findOne({ email })
      .then(user => {
        // If no match found, return and flash message upon redirect
        if(!user) {
          return done(null, false, { message: 'Email does not match an existing user' });
        }
        // If email match is found, compare submitted password with that email's password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}