require('./config/config');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//Importación de rutas
app.use(require('./routes/index'));
app.use(express.static(path.resolve(__dirname, '../public')))

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos online')
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT)
})