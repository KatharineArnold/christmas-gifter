var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

//add routers here
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var giftersRouter = require('./routes/gifters');
const authRouter = require('./routes/auth');

var app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

//add routes here
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/gifters', giftersRouter);
app.use('/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// If deployed, use the deployed database. Otherwise use the local mongo database
var MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://devUser:Password123@localhost:27017/dev';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;
