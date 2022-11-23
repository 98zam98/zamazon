import express from 'express';
import data from './data';
const app = express();
var cors = require('cors')

app.use(cors()) 
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`PORT ${port}`);
});