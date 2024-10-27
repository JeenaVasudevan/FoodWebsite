import express from "express";
import { createFood, deleteFood, getFoodById, getFoods, updateFood } from "../controllers/foodControllers.js";
import { authAdmin } from "../middleware/authAdmin.js";

const router = express.Router();

router.post('/add', authAdmin, createFood);
router.get('/food', getFoods);
router.get('/food/:id', getFoodById);
router.put('/food/:id', authAdmin, updateFood);
router.delete('/food/:id', authAdmin, deleteFood);

export { router as foodRouter };
