const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require('./routes');
const mongoose = require('mongoose');
const http = require("http");
const session = require('express-session');
const morgan = require('morgan');
const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;

//express
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(express.static("client/build"));

//sessions
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// auth
const User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// api routes
app.use(routes);

// default
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/isaFitDb');

// server ping
setInterval(function() {
  http.get("http://<your app name>.herokuapp.com");
}, 3000000);

// server
app.listen(PORT, () => {
  console.log(`🌎  ==> Server now on port ${PORT}!`);
});
