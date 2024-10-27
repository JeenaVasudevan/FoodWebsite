import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:"https://play.google.com/store/apps/details?id=af.ahg.ashpaziapp&hl=is",
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const Food = mongoose.model("Food",foodSchema);
