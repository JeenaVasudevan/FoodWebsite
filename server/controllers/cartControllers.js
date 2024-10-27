import {Cart} from '../models/cartModel.js'

export const createCartItem = async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    cartItem.calculateTotalPrice();
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getCartItems = async (req,res) => {
  try {
    const cartItems = await Cart.find()
      .populate('item', 'name')
      .populate('restaurant', 'name');
    res.status(200).json(cartItems);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCartItemById = async (req,res) => {
  try {
    const cartItem = await Cart.findById(req.params.id)
      .populate('item', 'name')
      .populate('restaurant', 'name');
    if (!cartItem) return res.status(404).json({message:"Cart item not found"});
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({message:error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });
    Object.assign(cartItem, req.body);
    cartItem.calculateTotalPrice();
    await cartItem.save();
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCartItem = async (req,res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) return res.status(404).json({ message: "Cart item not found" });
    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
