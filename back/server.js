const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const productsRouter = require('./routes/products');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('API for shopping website')
})

app.use('/api/products', productsRouter);

app.listen(5000);
