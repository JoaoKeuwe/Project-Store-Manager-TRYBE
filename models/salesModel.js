const connection = require('./connection');

const serialize = (sales) => ({
    saleId: sales.sale_id,
    date: sales.date,
    productId: sales.product_id,
    quantity: sales.quantity,
});

const getAll = async () => {
    const query = `SELECT
    sale_id, date, product_id, quantity
    FROM StoreManager.sales as s 
    INNER JOIN StoreManager.sales_products as p ON s.id = p.sale_id`;
    const [sales] = await connection.execute(query);
    return sales.map(serialize);
};

const findById = async (id) => {
    const query = `SELECT
    date, product_id, quantity
    FROM StoreManager.sales_products as s 
    INNER JOIN StoreManager.sales as p ON s.sale_id = p.id
    WHERE sale_id = ?`;
    const [sales] = await connection.execute(query, [id]);
    return sales.map(serialize);
};

module.exports = {
    getAll,
    findById,
};