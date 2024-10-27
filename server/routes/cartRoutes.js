import express from "express"
import { createCartItem, deleteCartItem, getCartItemById, getCartItems, updateCartItem } from "../controllers/cartControllers.js";
import { authUser } from "../middleware/authUser.js";
const router=express.Router()

router.post('/create',authUser, createCartItem);

router.get('/cart',authUser, getCartItems);

router.get('/cart/:id',authUser,getCartItemById);

router.put('/cart/:id',authUser, updateCartItem);

router.delete('/cart/:id',authUser,deleteCartItem);

export {router as cartRouter}