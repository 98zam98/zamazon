import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import data from './data';
import seedRouter from './routes/seedRoutes';
import productRouter from './routes/productRoutes';
const app = express();

// var cors = require('cors')

// app.use(cors()) ;

// to handle .env
dotenv.config();

// connect to the DB "local"
mongoose.connect((process.env as any).MONGODB_URI).then(()=>{
    console.log("DB");
}).catch(e=>console.log(e.message));



// products will be created here
app.use('/api/seed', seedRouter);

// products that will be shown 
app.use('/api/products', productRouter);

// ===================================================================== deploy

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`PORT ${port}`);
});