// Renomeie esse arquivo
const productsModel = require('../models/productModel');

const getAll = async () => {
    const products = await productsModel.getAll();
    return products;
};

const findById = async (id) => {
    const products = await productsModel.findById(id);
    return products;
};

const createAll = async (name, quantity) => {
    if (name.length < 5) {
        return { message: 'minimo carcateres', status: 409 };
    }
    const valid = productsModel.validName(name);
    if (valid === undefined) {
        return { message: 'Product already exists', status: 409 };
    }

    const service = await productsModel.createAll(name, quantity);
    return service;
};

module.exports = {
    getAll,
    findById,
    createAll,
};