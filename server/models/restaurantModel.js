import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    unique: true,
  },
  image: {
    type: String,
    default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Flamaa.net%2F&psig=AOvVaw1l0IF_wlJ63JxSKUB0oi-8&ust=1729071562228000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj-pdSLkIkDFQAAAAAdAAAAABAE",
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 500,
  },
  mobileNo: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
