const {
    SubCategories,
    Products,
} = require('../models');

module.exports = async (req, res) => {
    try {
        const { params } = req;

        const {
            collection,
            gender,
            types = [],
            colors = []
        } = params;
    
        const productsQuery = { subCategory: collection };
    
        if (gender) productsQuery.gender = gender;
        if (types.length) productsQuery.types = { $in: types };
        if (colors.length) productsQuery.colors = { $in: colors };
    
        const products = await Products.find(productsQuery);
    
        const subCategory = await SubCategories.findOne({ name: collection });
    
        const colorsOptions = await Products.distinct('colors', { subCategory: collection });

        return res.json({
            products,
            subCategory,
            colorsOptions
        })
    } catch (err) {
        console.log(err)

        return res.json(err);
    }
}