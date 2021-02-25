
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const libro = require('./routes/Libro');
const cliente = require('./routes/Cliente');
const venta = require('./routes/Venta');
const { PORT } = require('./config')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/libro/',libro);
app.use('/api/cliente/',cliente);
app.use('/api/venta/',venta);
app.listen(PORT, () => console.log('Servidor Run OK !! In port: '+ PORT))

require('./db')
