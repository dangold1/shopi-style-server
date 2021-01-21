const { getProductByID, getProductByText } = require('../controllers/products.controller');

module.exports = (app) => {
    app.get('/product/:collection/:productID', getProductByID);
    app.get('/products', getProductByText);
}