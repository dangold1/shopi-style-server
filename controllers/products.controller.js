const service = require('../services/products.service');

const getProductByID = async (req, res) => {
    try {
        const { productID } = req.params;
        const data = await service.getProduct(productID);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

const getProductByText = async (req, res) => {
    try {
        const { text } = req.query;
        const data = await service.getMatchProducts(text);
        res.json(data);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

module.exports = {
    getProductByID,
    getProductByText,
};