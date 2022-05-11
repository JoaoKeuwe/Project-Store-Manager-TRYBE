// Renomeie esse arquivo
const productsModel = require('../models/productModel');

const getAll = async () => {
    const products = await productsModel.getAll();
    return products;
};

module.exports = {
    getAll,
};