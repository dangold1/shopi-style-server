const Stripe = require('stripe');

const { STRIPE_SECRET_KEY } = process.env;

module.exports = async (req, res) => {
    const { body: { id, amount } } = req;

    try {
        const stripe = new Stripe(STRIPE_SECRET_KEY);
        console.log('send payment request', JSON.stringify({ id, amount }))
        await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'User Items',
            payment_method: id,
            confirm: true
        })

        return res.json({ isConfirm: true });
    } catch (err) {
        console.log(JSON.stringify({ err }))

        return res.json(err);
    }
}