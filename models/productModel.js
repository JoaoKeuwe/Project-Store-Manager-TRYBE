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

const createAll = async (name, quantity) => {
    const query = 'INSERT INTO StoreManager.products (name, quantity) values(?,?);';
    const [product] = await connection.execute(query, [name, quantity]);    
    return {
        name,
        quantity,
        id: product.insertId,
    };
};

const validName = async (name) => {
    const query = `SELECT *
    FROM StoreManager.products
    where name = ?`;
    const equalName = await connection.execute(query, [name]);
    return equalName;
};

module.exports = {
    getAll,
    findById,
    createAll,
    validName,
};