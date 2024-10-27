import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:30,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    mobile:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    },},
{timestamps:true},
  );

export const User=mongoose.model("User",userSchema)  