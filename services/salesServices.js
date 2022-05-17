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
// req 8
 const updateSale = async (updateList, id) => {
     const updateSales = await salesModel.updateSale(updateList, id);
     return updateSales;
 };

module.exports = {
    getAll,
    findById,
    addProduct,
    create,
    updateSale,
};