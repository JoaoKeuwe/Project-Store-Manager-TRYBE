const productService = require('../services/productService');

const getAll = async (req, res) => {
    const products = await productService.getAll();
    if (products === undefined) {
        res.status(400).json({ message: 'Product not found' });
    }
    res.status(200).json(products);
};

module.exports = {
    getAll,
};