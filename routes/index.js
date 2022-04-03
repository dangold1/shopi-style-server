const express = require('express')
const router = express.Router()

const {
    getProduct,
    getMatchProducts,
    getCollection,
    chargeAccount,
} = require('../lib')


// collections
router.post('/collection/:collection', getCollection);

// products
router.get('/product/:collection/:productID', getProduct);
router.get('/products', getMatchProducts);

// payments
router.post('/payment', chargeAccount);

module.exports = router
