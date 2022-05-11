// Renomeie esse arquivo
const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM StoreManager.products';
    const [product] = await connection.execute(query);    
    return product;
};

module.exports = {
    getAll,
};