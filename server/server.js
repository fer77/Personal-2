var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session')
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var podcastsCtrl = require('./controllers/podcastsCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var User = require('./models/userMdl');

var app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(session({secret: 'superCripticSecret'}));
app.use(cors());

//PASSPORT
passport.use(new LocalStrategy ({
username: 'email'
}, function(email, password, done) {
  User.findOne({email: email}).exec(function(err, user) {
    if (err){
      done(err);
    }  else if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var nodePort = 3000;
var mongoUri = 'mongodb://localhost:27017/podcastApp-mongoose';

// Endpoints
app.post('/podcast', podcastsCtrl.create);
app.get('/podcast', podcastsCtrl.read);
app.put('/podcast/:id', podcastsCtrl.update);

app.post('/user', userCtrl.create);
app.get('/user', userCtrl.read);
app.put('/user/:id', userCtrl.update);

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(nodePort, function () {
    console.log('Server running on port ' + nodePort);
})
