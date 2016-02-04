var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cart = require('cartSchema.js')

var userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true
    },
    cartItems: [cart]
});

module.exports = mongoose.model('User', userSchema);
