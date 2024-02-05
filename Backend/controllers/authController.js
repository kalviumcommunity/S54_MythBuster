import bcrypt from "bcryptjs"
import User from "../models/users.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


const signup = async(req,res) =>{
    try{
        const {fullname,username,password,confirmPassword,gender} = req.body
        if(!fullname || !username || !password || !confirmPassword || !gender){
            res.status(400).json({"error":"Invalid Data"});
        }
        if (password !== confirmPassword){
            return res.status(400).send('Passwords do not match')
        }

        
        // ^ Hashing Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        
        // * Generating Profile Pictures based on gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        // ! Creating New User 
        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            // Generate JWT token here
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save()

            //^ Sending the Status and Response
            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                profilePic:newUser.profilePic
            });
        }else{
            res.status(400).json({error: "Invalid user data"})
        }


    }catch(error){
        console.log("Error in Signup Controller",error.message)
        res.status(500).json({"error":"Internal Server Error"})
    }
}

const login = async(req,res) =>{
    try{
        const {username,password} = req.body
        //* Checking If The User Exists In Database Or Not
        const user = await User.findOne({username})
        
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Username or Password"})
        }

        generateTokenAndSetCookie(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            profilePic:user.profilePic
        })

    }catch(error){
        console.log("Error in Login Controller",error.message)
        res.status(500).json({"error":"Internal Server Error"})
    }
}

const logout = async(req,res) =>{
    try{
        //^ Clear Cookie Here
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({"message":"Logged Out Successfully"});

    }catch(error){
        console.log("Error in Logout Controller",error.message)
        res.status(500).json({"error":"Internal Server Error"})
    }
}

export {signup,login,logout}