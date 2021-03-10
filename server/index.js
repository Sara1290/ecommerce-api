const express = require ('express');
const products = require ('../products.json')
const getProducts = require ('./getProducts')
const app = express();
// app.use(express.json());


app.get('/api/products', getProducts)
app.get('/api/products/:id', getProducts)

app.listen(4041, () => console.log('server running on 4041'))