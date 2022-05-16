const salesService = require('../services/salesServices');

const getAll = async (req, res) => {
    const salesGetAll = await salesService.getAll();
    console.log(salesGetAll);
    if (salesGetAll === undefined) {
        return res.status(400).json({ message: 'Product not found' });
    }
    res.status(200).json(salesGetAll);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const salesServices = await salesService.findById(id);
    console.log(salesServices);
    if (salesServices.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
    }
     res.status(200).json(salesServices);
};

 const create = async (req, res) => {
     const salesList = [...req.body];
     const productAdd = await salesService.create(salesList);
     res.status(201).json(productAdd);
 };
// req8
 const createSale = async (req, res) => {
     const updateList = [...req.body];
     const { id } = req.params;
     const saleAdd = await salesService.createSale(updateList, id);
     res.status(200).json(saleAdd);
 };

module.exports = {
    getAll,
    findById,
    create,
    createSale,
};
