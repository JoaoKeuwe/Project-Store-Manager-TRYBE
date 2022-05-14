const productService = require('../services/productService');
const productModel = require('../models/productModel');

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
    const [valid] = await productModel.validName(name);
    console.log(valid);
    if (valid.length > 0) {
        return res.status(409).json({ message: 'Product already exists' });
    }
    const create = await productService.createAll(name, quantity);
        res.status(201).json(create);
};
const update = async (req, res) => {
    const { name, quantity } = req.body;
    const { id } = req.params;
    const productUpdate = await productService.update(name, quantity, id);
    if (productUpdate.message) {
    return res.status(productUpdate.status).json({ message: productUpdate.message });
    }
    return res.status(200).json(productUpdate);
};

const remove = async (req, res) => {
    const { id } = req.params;
    await productService.remove(id);
    return res.status(204).end();
};
module.exports = {
    getAll,
    findById,
    createAll,
    update,
    remove,
};