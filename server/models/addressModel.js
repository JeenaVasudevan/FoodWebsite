import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  email: {
    type:String,
    required:true,
  },
  mobile: {
    type:String,
    required:true,
  },
  street: {
    type:String,
    required:true,
  },
  state: {
    type:String,
    required:true,
  },
  city: {
    type:String,
    required:true,
  },
  pincode: {
    type:String,
    required:true,
  },
}, { timestamps: true });

export const Address = mongoose.model("Address",addressSchema);
