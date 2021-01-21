const mongoose = require('mongoose');

const Products = mongoose.model('products', new mongoose.Schema({
    category: String,
    caption: String,
    types: Array,
    gender: String,
    sizes: Array,
    colors: Array,
    price: Number,
    imageUrl: String
}));

module.exports = Products;