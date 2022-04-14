module.exports = async (req, res) => {
    try {
        const { body: { id, amount } } = req;

        await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'User Items',
            payment_method: id,
            confirm: true
        })

        return res.json({ isConfirm: true });
    } catch (err) {
        console.log(err)

        return res.json(err);
    }
}