const salesModel = require('../models/salesModel');

const getAll = async () => {
    const sales = salesModel.getAll();
    return sales;
};

const findById = async (id) => {
    const sales = salesModel.findById(id);
    return sales;
};

module.exports = {
    getAll,
    findById,
};