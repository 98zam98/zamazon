import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import data from './data';
import seedRouter from './routes/seedRoutes';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';
import orderRouter from './routes/orderRoutes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to handle .env
dotenv.config();

// connect to the DB "local"
mongoose.connect((process.env as any).MONGODB_URI).then(()=>{
    console.log("DB");
}).catch(e=>console.log(e.message));



// products\users will be created here
app.use('/api/seed', seedRouter);

// products that will be shown 
app.use('/api/products', productRouter);

// users that will be shown 
app.use('/api/users', userRouter);

//  to place orders 
app.use('/api/orders', orderRouter);

// error handle

app.use((err:any, req:any, res:any, next:any) => {
    res.status(500).send({ message: err.message });
  });

  
// ===================================================================== deploy

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`PORT ${port}`);
});