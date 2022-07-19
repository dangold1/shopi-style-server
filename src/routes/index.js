const express = require('express')
const router = express.Router()

const {
    getProductByID,
    getProductByText,
} = require('./products')

const getCollection = require('./collections')
const payment = require('./payments')

// collections
router.post('/collection/:collection', getCollection);

// products
router.get('/product/:collection/:productID', getProductByID);
router.get('/products', getProductByText);

// payments
router.post('/payment', payment);

module.exports = router
