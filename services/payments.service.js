const Stripe = require('stripe');
const { STRIPE_SECRET_KEY } = process.env;
const stripe = new Stripe(STRIPE_SECRET_KEY);

const chargeAccount = async ({ id, amount }) => {
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'User Items',
            payment_method: id,
            confirm: true
        });
        return { isConfirm: true };
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports = {
    chargeAccount,
}