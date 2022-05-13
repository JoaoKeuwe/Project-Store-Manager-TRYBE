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
    const [productsId] = await productService.findById(id);
    console.log(productsId);
    if (productsId === undefined) {
        res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(productsId);
};

const createAll = async (req, res) => {
    const { name, quantity } = req.body;
    const create = await productService.createAll(name, quantity);
    res.status(201).json(create);
};

module.exports = {
    getAll,
    findById,
    createAll,
};