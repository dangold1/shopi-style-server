const mongoose = require('mongoose');

const SubCategories = mongoose.model('sub-categories', new mongoose.Schema({
    name: String,
    collectionAmount: Number,
    sizes: Array,
    genders: Array,
    types: Array
}));

module.exports = SubCategories ;