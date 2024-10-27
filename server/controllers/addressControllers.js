import { Address } from '../models/addressModel.js';

export const createAddress = async (req,res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ message:error.message });
  }
};

export const getAddresses = async (req,res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAddressById = async(req,res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
