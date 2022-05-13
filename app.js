const express = require('express');
const bodyParser = require('body-parser');
const controllerProducts = require('./controllers/controllerProducts');
const controllerSales = require('./controllers/controllerSales');

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

app.post('/products', controllerProducts.createAll);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
