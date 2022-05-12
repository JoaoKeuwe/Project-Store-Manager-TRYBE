// Renomeie esse arquivo
const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM StoreManager.products';
    const [product] = await connection.execute(query);    
    return product;
};

const findById = async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ? ';
    const [products] = await connection.execute(query, [id]);
    return products;
};

module.exports = {
    getAll,
    findById,
};