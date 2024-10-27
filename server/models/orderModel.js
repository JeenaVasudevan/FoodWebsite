import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  restaurant:{
    type:mongoose.Types.ObjectId,
    ref:"Restaurant",
    required:true,
  },
  item:{
    type:mongoose.Types.ObjectId,
    ref:"Food",
    required:true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  total:{
    type: Number,
    required: true,
  },
  address:{
    type: mongoose.Types.ObjectId,
    ref: "Address",
    required: true,
  },
}, { timestamps: true });
orderSchema.methods.calculateTotalPrice = function () {
  this.total = this.quantity * this.price; 
  return this.total;}
  
export const Order = mongoose.model("Order",orderSchema);
