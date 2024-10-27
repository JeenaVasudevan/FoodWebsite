import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utilities/token.js";
export const create=async(req,res,next)=>{
    try{
    const {name,email,password,mobile}=req.body;
    if(!name||!email||!password||!mobile){
    return res.status(400).json({message:"All fields are required"})
    }
    const userAlreadyExist=await User.findOne({email})

    if(userAlreadyExist){
        return res.status(400).json({error:"User Already Exist"})
    }
    
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    const newUser=new User({name,email,password:hashedPassword,mobile})
    const savedUser=await newUser.save()

    if(savedUser){
        const token=await generateToken(savedUser._id)
        res.cookie("token",token)
        return res.status(201).json({message:"User registration successfull",savedUser})
    }
    return res.status(500).json({error:"Something went wrong"})

    }
    catch(error){
    console.log(error)
    res.status(error.status||500).json({error:error.message||"Internal server error"})
    }
}

export const login=async(req,res,next)=>{
    try{
    const {email,password}=req.body;
    if(!email||!password){
    return res.status(400).json({message:"All fields are required"})
    }
    const userAlreadyExist=await User.findOne({email})

    if(!userAlreadyExist){
        return res.status(400).json({error:"User does not Exist"})
    }
    
    const passwordMatch= await bcrypt.compare(password,userAlreadyExist.password)
    if(!passwordMatch){
        return res.status(400).json({error:"Password does not match"})
    }

    const token=await generateToken(userAlreadyExist._id)
    res.cookie("token",token)
    res.status(200).json({message:"Login Success"})

    }
    catch(error){
    console.log(error)
    res.status(error.status||500).json({error:error.message||"Internal server error"})
    }
}

export const userProfile = async (req, res, next) => {
    try {
        const {user}=req
        const userData = await User.findById(user).select('-password')

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ success: true, message: "User profile fetched", userData });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};

export const userLogout = async (req, res, next) => {
    try {
        res.clearCookie('token')
        res.json({ success: true, message: "User Logged Out" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};

export const userUpdate = async (req, res, next) => {
    try {
        const { user } = req;
        const updates = req.body;

        if (updates.password) {
            return res.status(400).json({ message: "Password update is not allowed in this route." });
        }
        const updatedUser = await User.findByIdAndUpdate(user,updates,{ new: true, runValidators: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ success: true, message: "User profile updated", updatedUser });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error' });
    }
};
export const checkUser = async (req, res, next) => {
    try {
        res.json({ success: true, message: "autherized user" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};
