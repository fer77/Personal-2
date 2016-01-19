var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId;

var app = express();
app.use(bodyParser.json());

var nodePort = 3000;

//app.get('/api', function (req, res, next) {
//    res.send();
//})

var db = mongojs('ecommerce', ['products']);

app.post('/api/products', function (req, res) {
    var dataToInsert = req.body;
    db.products.insert(dataToInsert, function (err, result) {
        if (err) {
            res.status(500).end();
        }
        res.send(result);
    });
})

app.get('/api/products', function (req, res) {
    db.products.find({}, function (err, result) {
        res.send(result);
    })
    console.log('get hit');
})

app.delete('/api/products/:id', function (req, res) {
    var idToDelete = ObjectId(req.params.id)
    db.products.remove({
            _id: idToDelete
        },
        function (err, result) {
            if (err) {
                res.status(500).send("Failed to delete");
            }
            res.send("Sucessfully deleted record");
        })
})

app.put('/api/products/:id', function (req, res) {
    var idToModify = ObjectId(req.params.id)
    var updateObject = {
        query: {
            _id: idToModify
        },
        update: {
            $set: req.body
        },
        new: false
    }
    db.products.findAndModify(updateObject, function (err, result) {
        console.log('query completed');
        res.send(result);
    })
})

app.listen(nodePort, function () {
    console.log('Server running on port ' + nodePort);
})
