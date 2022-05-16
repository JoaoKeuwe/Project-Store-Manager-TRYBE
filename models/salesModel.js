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
const getId = async () => {
    const [getAllSales] = await connection.execute('SELECT * FROM StoreManager.sales');
     const response = await connection.execute(`INSERT INTO StoreManager.sales
    (id) VALUES (?)`, [getAllSales.length + 1]);
    return response[0].insertId;
};
const addSales = async (saleId, quantity, productId) => {
    const [addAllSales] = await connection.execute(`INSERT INTO StoreManager.sales_products
     (sale_id, quantity, product_id) VALUES (?,?,?)`, [saleId, quantity, productId]);
     return addAllSales;
};
const create = async (sales) => {
    const id = await getId();
    sales.map(({ quantity, productId }) => addSales(id, quantity, productId));
    return { id, itemsSold: [...sales] };
};
// req8
const createSale = async (quantity, productId, id) => {
    await connection.execute(
      `UPDATE sales_products SET quantity = ?, product_id = ?
      WHERE sale_id = ?;`,
      [quantity, productId, id],
  );
    };

module.exports = {
    getAll,
    findById,
    create,
    addSales,
    createSale,
};