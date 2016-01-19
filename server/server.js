var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var mainServerCtrl = require('../server/controllers/mainServerCtrl');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var nodePort = 3000;
var mongoUri = 'mongodb://localhost:27017/ecommerce-mongoose';

// Endpoints
app.post('/api/products', mainServerCtrl.create);
app.get('/api/products', mainServerCtrl.read);
app.put('/api/products/:id', mainServerCtrl.update);
app.delete('/api/products/:id', mainServerCtrl.delete);

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(nodePort, function () {
    console.log('Server running on port ' + nodePort);
})
