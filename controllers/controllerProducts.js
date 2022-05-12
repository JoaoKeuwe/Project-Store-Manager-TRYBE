const productService = require('../services/productService');

const getAll = async (req, res) => {
    const products = await productService.getAll();
    if (products === undefined) {
        res.status(400).json({ message: 'Product not found' });
    }
    res.status(200).json(products);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const productsId = await productService.findById();
    res.status(200).json(productsId);
};

module.exports = {
    getAll,
    findById,
};