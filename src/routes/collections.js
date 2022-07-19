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
    
        const query = { subCategory: collection };
    
        if (gender) query.gender = gender;

        if (types.length) query.types = { $in: types };

        if (colors.length) query.colors = { $in: colors };
    
        const products = await Products.find(query).lean().exec();
    
        const subCategory = await SubCategories.findOne({ name: collection }).lean().exec();
    
        const colorsOptions = await Products.distinct('colors', { subCategory: collection }).lean().exec();

        return res.json({
            products,
            subCategory,
            colorsOptions
        })
    } catch (err) {
        console.log({err})

        return res.json(err);
    }
}