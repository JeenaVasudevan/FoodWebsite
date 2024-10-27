import express from "express"
import { createRestaurant, deleteRestaurant, getRestaurantById, getRestaurants, updateRestaurant } from "../controllers/restaurantControllers.js";
import { authAdmin } from "../middleware/authAdmin.js";
import { authUser } from "../middleware/authUser.js";
const router=express.Router()

router.post('/create', authAdmin,createRestaurant);

router.get('/restaurants',authUser, getRestaurants);

router.get('/restaurants/:id',authUser, getRestaurantById);

router.put('/restaurants/:id',authAdmin, updateRestaurant);

router.delete('/restaurants/:id',authAdmin, deleteRestaurant);

export {router as RestaurantsRouter}