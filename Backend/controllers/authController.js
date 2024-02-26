import bcrypt from "bcryptjs"
import User from "../models/users.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


const signup = async(req,res) =>{
    try{
        const {fullname,username,email,password,confirmPassword,gender} = req.body
     
        if(!fullname || !username || !email || !password || !confirmPassword || !gender){
            res.status(400).json({"error":"Invalid Data"});
        }
        if (password !== confirmPassword){
            return res.status(400).send('Passwords do not match')
        }

          //* Checking If The User Exists In Database Or Not
          const exitingUser = await User.findOne({email})
        
          if(exitingUser){
            return res.status(401).send("Username already exists with this email")
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
            email,
            password:hashedPassword,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            // Generate JWT token here
            // generateTokenAndSetCookie(newUser._id,res)
            const jwt =await generateTokenAndSetCookie(newUser._id,res)
            console.log(jwt)
            await newUser.save()

            //^ Sending the Status and Response
            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                profilePic:newUser.profilePic,
                token: jwt
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

        const jwt = await generateTokenAndSetCookie(user._id,res)
        console.log(jwt)
        res.status(200).json({
            username:user.username,
            fullname:user.fullname,
            profilePic:user.profilePic,
            token : jwt
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



async function findUser(req, res) {
    try {
      const user = await User.find();
      res.status(200).json({ data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching myths" });
    }
  }
export {signup,login,logout,findUser}