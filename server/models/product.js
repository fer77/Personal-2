/*
Title: This will be the title of the product
String
Unique
Required
Index
Description: This will describe your product
String
Required
Price: This will be the price of your product
Number
Required
Minimum of 0*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});


module.exports = mongoose.model('Product', productSchema);
