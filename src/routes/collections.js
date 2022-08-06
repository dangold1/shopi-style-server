const {
    SubCategories,
    Products,
} = require('../models');


module.exports = async (req, res) => {
    const { body, params } = req;
    console.log('get request to collection route', { params })

    try {
        const { collection } = params;

        const {
            gender,
            types = [],
            colors = []
        } = body

        const query = { subCategory: collection };

        if (gender) query.gender = gender;
        if (types.length) query.types = { $in: types };
        if (colors.length) query.colors = { $in: colors };


        const [products, subCategory, colorsOptions] = await Promise.all([
            Products.find(query).lean().exec(),
            SubCategories.findOne({ name: collection }).lean().exec(),
            Products.distinct('colors', { subCategory: collection }).lean().exec(),
        ])

        const collectionsData = {
            products,
            subCategory,
            colorsOptions
        }

        return res.json(collectionsData)
    } catch (err) {
        console.log(JSON.stringify({ err }))
        return res.json(err);
    }
}