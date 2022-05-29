var mongoose=require('mongoose');

var Product = new mongoose.Schema({
    
    Name: String,
    Price: Number,
    Type: String,
    Active: Boolean,
});

module.exports = mongoose.model(
    'product', Product, 'Products');