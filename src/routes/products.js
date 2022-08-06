const {
    SubCategories,
    Products,
} = require('../models');



const getProductByID = async (req, res) => {
    const { params: { productID } } = req;
    console.log('get request to product by id route')

    try {
        const product = await Products.findOne({ _id: productID }).lean().exec();
        const subCategory = await SubCategories.findOne({ name: product.subCategory }).lean().exec();

        const productData = {
            ...product,
            sizes: subCategory.sizes
        }

        console.log('got product data', JSON.stringify({ productData }))
        return res.json(productData);
    } catch (err) {
        console.log(JSON.stringify({ err }))
        return res.json(err);
    }
}

const getProductByText = async (req, res) => {
    const { query: { text } } = req;
    console.log('get request to product by text route', { text })

    try {
        const products = await Products.find({
            caption: {
                $regex: new RegExp(text),
                $options: 'i'
            }
        }).lean().exec()

        console.log('got product data', JSON.stringify({ products }))
        return res.json(products);
    } catch (err) {
        console.log(JSON.stringify({ err }))
        return res.json(err);
    }
}

module.exports = {
    getProductByID,
    getProductByText,
};