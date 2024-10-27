import { Food } from '../models/foodModel.js';

export const createFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};


export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate('restaurant', 'name'); 
    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id).populate('restaurant', 'name');
    if (!food) return res.status(404).json({ message: "Food item not found" });
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export const updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!food) return res.status(404).json({ message: "Food item not found" });
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};


export const deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ message: "Food item not found" });
    res.status(200).json({ message: "Food item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
