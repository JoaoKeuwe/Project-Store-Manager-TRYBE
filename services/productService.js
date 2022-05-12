// Renomeie esse arquivo
const productsModel = require('../models/productModel');

const getAll = async () => {
    const products = await productsModel.getAll();
    return products;
};

const findById = async () => {
    const products = await productsModel.findById();
    return products;
};

module.exports = {
    getAll,
    findById,
};