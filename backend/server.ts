import express from 'express';
import data from './data';
const app = express();

// var cors = require('cors')

// app.use(cors()) ;

app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
    // res.send(data.products);
    const product = data.products.find(i=> i.slug===req.params.slug);
    if (product)
    {
        res.send(product);
    }
    else
    {
        res.status(404).send({Message:"not found"})
    }
}); 
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`PORT ${port}`);
});