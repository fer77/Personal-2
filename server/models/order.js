var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cart = require('cartSchema.js');

var orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [cart],
    brand: String,
    qty: Number
});


module.exports = mongoose.model('Order', orderSchema);
