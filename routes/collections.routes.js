const { getCollection } = require('../controllers/collections.controller');

module.exports = (app) => {
    app.post('/collection/:collection', getCollection);
}