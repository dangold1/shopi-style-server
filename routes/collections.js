const service = require('../lib/collections');

module.exports = async (req, res) => {
    try {
        const { params, body } = req;
        const { collection } = params;

        const data = await service.getCollection({
            collection,
            ...body
        });
        res.json(data);
    } catch (err) {
        console.log(err)
        res.json(err);
    }
}