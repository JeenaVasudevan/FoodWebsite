import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  item: {
    type:mongoose.Types.ObjectId,
    ref:"Food",
    required:true,
  },
  restaurant: {
    type:mongoose.Types.ObjectId,
    ref:"Restaurant",
    required:true,
  },
  quantity:{
    type: Number,
    required:true,
  },
  price: {
    type:Number,
    required:true,
  },
  total:{
    type:Number,
    required:true,
  },
},{ timestamps: true });

cartSchema.methods.calculateTotalPrice = function () {
  this.total = this.quantity * this.price; 
  return this.total;
};

export const Cart = mongoose.model("Cart",cartSchema);
