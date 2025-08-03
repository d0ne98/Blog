import * as UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import passport from "passport";

export async function register(req, res) {
    const {username, password} = req.body;
    try {
        const response = await UserModel.findByUsername(username);
        if(response) return res.status(400).json({ message: "Username already exists" });
        const hashed = await bcrypt.hash(password,10);
        const user = await UserModel.createUser(username, hashed);
        const userWithoutPassword = {...user};
        delete userWithoutPassword.password;
        res.status(201).json({ message: "User created successfully", user: userWithoutPassword });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Registration failed" });
    }
    
}

export  function login(req, res, next) {
    passport.authenticate("local",(err, user, info)=>{
        if(err) return next(err);
        if(!user) return res.status(400).json({ message: info.message });
        req.login(user, (err)=>{
            if(err) return next(err);
            const userWithoutPassword = { ...user };
            delete userWithoutPassword.password;
            return res.status(200).json({ 
                message: "Login successful",
                user: userWithoutPassword
            });
        })
    })(req, res, next);
}



export function logout(req, res) {
    req.logout(()=>{
        res.json({ message: "Logged out" });
    })
}
export function getAuthStatus(req, res){
  if (req.isAuthenticated()) {
    const userWithoutPassword = { ...req.user };
    delete userWithoutPassword.password;
    
    return res.json({
      isAuthenticated: true,
      user: userWithoutPassword
    });
  }
  
  return res.json({ isAuthenticated: false });
};