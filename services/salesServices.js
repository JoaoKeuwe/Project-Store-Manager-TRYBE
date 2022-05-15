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

module.exports = {
    getAll,
    findById,
    addProduct,
};