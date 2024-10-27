import express from "express"
import { createOrder, deleteOrder, getOrderById, getOrders, updateOrder } from "../controllers/orderControllers.js";
import { authUser } from "../middleware/authUser.js";
const router=express.Router()

router.post('/create',authUser,createOrder);

router.get('/order',authUser, getOrders);

router.get('/order/:id',authUser, getOrderById);

router.put('/order/:id',authUser, updateOrder);

router.delete('/order/:id',authUser, deleteOrder);

export {router as orderRouter}