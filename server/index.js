
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productCtrl = require('./endpoints/product');

/* config  */
const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 8888;
/* end config */


/* controllers */
app.get('/product/:id', productCtrl.getSingleProduct);
app.get('/product', productCtrl.getAllProducts);
/* end controllers */


app.listen(PORT, () => {
    console.log('Listening on ',PORT);
});