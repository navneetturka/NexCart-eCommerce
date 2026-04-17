import userModel from "../model/userModel.js";
import validator from "validator";
import bycrypt from "bycrypt"
//route for user login 
const loginUser=async (req,res)=>{

}

// route for user registration
const registerUser= async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        //checking user already exists or not
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if(password.length< 8){
            return res.json({success:false, message:"Please enter a strong password"})
        }

        // hashing user password
        const salt=await bycrypt.genSalt(10)
        

    }catch(error){

    }
}

// route for admin login
const adminLogin= (req,res)=>{
    
}

export {loginUser, registerUser, adminLogin} 