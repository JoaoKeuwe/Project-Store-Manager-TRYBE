const salesModel = require('../models/salesModel');

const getAll = async () => {
    const sales = salesModel.getAll();
    return sales;
};

const findById = async (id) => {
    const sales = salesModel.findById(id);
    return sales;
};

const addProduct = async () => {
    const add = salesModel.addProduct();
    return add;
};

const create = async (sales) => {
    const createProduct = salesModel.create(sales);
    return createProduct;
};

module.exports = {
    getAll,
    findById,
    addProduct,
    create,
};