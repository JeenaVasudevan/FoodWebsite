import {Order} from '../models/orderModel.js'

export const createOrder = async (req,res) => {
  try {
    const { name, restaurant, item, quantity, price, address } = req.body;
    const newOrder = new Order({name,restaurant,item,quantity,price,address});
    newOrder.calculateTotalPrice();
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({message:error.message });
  }
};


export const getOrders = async(req,res) => {
  try {
    const orders = await Order.find()
      .populate('restaurant', 'name') 
      .populate('item', 'name')
      .populate('address');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req,res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('restaurant', 'name')
      .populate('item', 'name')
      .populate('address');
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    Object.assign(order, req.body);
    order.calculateTotalPrice();
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteOrder = async (req,res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
