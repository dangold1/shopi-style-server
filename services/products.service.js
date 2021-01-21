const SubCategories = require('../models/subCategoriesModel');
const Products = require('../models/productsModel');

const getProduct = async (productID) => {
    let product = await Products.findById({ _id: productID });
    product = product.toObject();
    let subCategory = await SubCategories.findOne({ name: product.subCategory });
    product.sizes = subCategory.toObject().sizes;
    return product;
}

const getMatchProducts = text => Products.find({ caption: { $regex: new RegExp(text), $options: 'i'} })

module.exports = {
    getProduct,
    getMatchProducts,
}