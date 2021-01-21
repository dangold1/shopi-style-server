const { chargeAccount } = require('../controllers/payments.controller.js');


module.exports = (app) => {
    app.post('/payment', chargeAccount);
}