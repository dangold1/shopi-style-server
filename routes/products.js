const {
    SubCategories,
    Products,
} = require('../models');

const getProductByID = async (req, res) => {
    try {
        const { params: { productID } } = req;

        const product = await Products.findOne({ _id: productID }).lean().exec();

        const subCategory = await SubCategories.findOne({ name: product.subCategory }).lean().exec();

        const data = {
            ...product,
            sizes: subCategory.sizes
        }

        return res.json(data);
    } catch (err) {
        console.log(err);

        return res.json(err);
    }
}

const getProductByText = async (req, res) => {
    try {
        const { query: { text } } = req;

        const products = await Products.find({
            caption: {
                $regex: new RegExp(text),
                $options: 'i'
            }
        }).lean().exec()

        return res.json(products);
    } catch (err) {
        console.log(err);

        return res.json(err);
    }
}

module.exports = {
    getProductByID,
    getProductByText,
};