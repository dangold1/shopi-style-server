const service = require('../services/payments.service');

const chargeAccount = async (req, res) => {
    try {
        const { id, amount } = req.body;
        const data = await service.chargeAccount({ id, amount });
        res.json(data);
    } catch (err) {
        console.log(err)
        res.json(err);
    }
}

module.exports = {
    chargeAccount,
};