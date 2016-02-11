var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session')
var cors = require('cors');
var podcastsCtrl = require('./controllers/podcastsCtrl.js');
var userCtrl = require('./controllers/userCtrl.js')

var app = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());
app.use(cors());

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
