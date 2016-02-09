var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var mainServerCtrl = require('../server/controllers/votesCtrl');

var app = express();

app.use(express.static(__dirname + './../js'));
app.use(bodyParser.json());
app.use(cors());

var nodePort = 3000;
var mongoUri = 'mongodb://localhost:27017/podcastApp-mongoose';

// Endpoints
app.post('/votes', votesCtrl.create);
app.get('/votes', votesCtrl.read);
app.put('/votes/:id', votesCtrl.update);

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(nodePort, function () {
    console.log('Server running on port ' + nodePort);
})
