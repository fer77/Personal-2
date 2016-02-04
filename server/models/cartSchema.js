var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var product = require('product');

var cart = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    qty: {type: Number}
});

module.exports = cart;
