import express from "express"
import { createReview, deleteReview, getReviewById, getReviews, updateReview } from "../controllers/reviewControllers.js";
import { authUser } from "../middleware/authUser.js";
const router=express.Router()

router.post('/create',authUser,createReview);

router.get('/review',authUser,getReviews);

router.get('/review/:id',authUser,getReviewById);

router.put('/review/:id',authUser,updateReview);

router.delete('/review/:id',authUser,deleteReview);

export {router as reviewRouter}