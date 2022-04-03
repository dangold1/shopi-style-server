const SubCategories = require('../models/subCategoriesModel');
const Products = require('../models/productsModel');

const getProduct = async (productId) => {
    const product = await Products.findOne({ _id: productId })
        .lean()
        .exec();

    const { sizes } = await SubCategories.findOne({ name: product.subCategory })
        .lean()
        .exec();

    return {
        ...product,
        sizes
    }
}

const getMatchProducts = async (text) => {
    try {
        const products = Products.find({
            caption: {
                $regex: new RegExp(text),
                $options: 'i'
            }
        }).lean().exec()
        return products
    } catch (e) {
        throw e
    }
}

module.exports = {
    getProduct,
    getMatchProducts,
}