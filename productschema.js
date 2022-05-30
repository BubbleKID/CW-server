var mongoose=require('mongoose');

var Product = new mongoose.Schema({
    name: String,
    price: Number,
    type: String,
    active: Boolean,
});

module.exports = mongoose.model(
    'product', Product, 'Products');