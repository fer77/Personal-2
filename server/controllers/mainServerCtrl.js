var Product = require('../models/product');

module.exports = {
    create: function (req, res) {
        var newSighting = new Product(req.body);
        newProduct.save(function (err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    read: function (req, res) {
        console.log('req.query: ', req.query);
        Product.find(req.query)
            .populate('user')
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                res.send(result);
            });
    },

    update: function (req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        }).populate('cart');
    },

    delete: function (req, res) {
        Product.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    }
};
