const SubCategories = require('../models/subCategoriesModel');
const Products = require('../models/productsModel');

const getColorsOptions = (collection) => Products.distinct('colors', { subCategory: collection });

const getCollection = async (args) => {
    const { collection, gender, types = [], colors = [] } = args;
    const productsQuery = { subCategory: collection };
    if (gender) productsQuery.gender = gender;
    if (types.length) productsQuery.types = { $in: types };
    if (colors.length) productsQuery.colors = { $in: colors };

    const products = await Products.find(productsQuery);
    const subCategory = await SubCategories.findOne({ name: collection });
    const colorsOptions = await getColorsOptions(collection);

    return {
        products,
        subCategory,
        colorsOptions
    }
}

module.exports = {
    getColorsOptions,
    getCollection
}