import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel';

const orderRouter = express.Router();

orderRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x:any) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
    });

    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
  })
);

export default orderRouter;
