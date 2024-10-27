import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true,
  },
  restaurant:{
    type:mongoose.Types.ObjectId,
    ref:"Restaurant",
    required:true,
  },
  item: {
    type:mongoose.Types.ObjectId,
    ref:"Food",
    required:true,
  },
  rating:{
    type:Number,
    min:1,
    max:5,
    required:true,
  },
  review: {
    type:String,
    required:true,
  },
}, { timestamps:true });

export const Review = mongoose.model("Review",reviewSchema);
