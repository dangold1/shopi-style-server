const dataTypes = require('./data-types')
const {
    getProduct,
    getMatchProducts,
} = require('./products')
const {
    getColorsOptions,
    getCollection
} = require('./collections')
const chargeAccount = require('./charge-account')

module.exports = {
    dataTypes,
    getProduct,
    getMatchProducts,
    getColorsOptions,
    getCollection,
    chargeAccount,
}