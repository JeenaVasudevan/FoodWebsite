import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import { Admin } from '../models/adminModel.js';

export const createAdmins = async (req, res) => {
    try {
        const { name, email, password, mobile, profilePic, role } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newAdmin = new Admin({
            name,
            email,
            password:hashedPassword,
            mobile,
            profilePic,
            role,
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const generateToken= (adminId) => {
    return jwt.sign({id:adminId }, process.env.JWT_SECRET_KEY);
};

export const adminLogin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email||!password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const adminAlreadyExist = await Admin.findOne({email});
        if (!adminAlreadyExist) {
            return res.status(400).json({ error: "Admin does not exist" });
        }
        const passwordMatch = await bcrypt.compare(password, adminAlreadyExist.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Password does not match" });
        }
        const token=await generateToken(adminAlreadyExist._id)
        res.cookie("token",token)
        res.status(200).json({message:"Login Success"})

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal server error" });
    }
};


export const getAllAdmins= async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        let updatedData = { ...req.body };

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updatedData.password = hashedPassword; 
        }

        const updatedAdmin = await Admin.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json({ message: 'Admin updated successfully', admin: updatedAdmin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAdmin = await Admin.findByIdAndDelete(id);

        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const adminLogout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: 'Logout failed', error: error.message });
    }
};

