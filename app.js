const express = require('express');
const bodyParser = require('body-parser');
const controllerProducts = require('./controllers/controllerProducts');
const controllerSales = require('./controllers/controllerSales');
const validName = require('./middlewares/validName');
const validQuantity = require('./middlewares/validQuantity');

const app = express();
app.use(bodyParser.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', controllerProducts.getAll);

app.get('/products/:id', controllerProducts.findById);

app.get('/sales', controllerSales.getAll);

app.get('/sales/:id', controllerSales.findById);

app.post('/products', validName, validQuantity, controllerProducts.createAll);

app.put('/products/:id', validName, validQuantity, controllerProducts.update);

app.delete('/products/:id', controllerProducts.remove);

app.post('/sales', controllerSales.create);

app.put('/sales/:id', controllerSales.createSale);

// app.post('/sales', controllerSales.)
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
