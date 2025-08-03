import {Strategy as LocalStrategy} from "passport-local";
import passport from "passport";
import * as UserModel from "../models/user.js";
import bcrypt from "bcrypt";



passport.use('local',new LocalStrategy(async (username, password, done)=>{
    try {
        const user = await UserModel.findByUsername(username);
        if(!user) return done(null, false,{message: "User not found"});
        const match = await bcrypt.compare(password, user.password);
        if(!match) return done(null, false, {message: "Invalid password"});

        return done(null, user);

    } catch (err) {
        done(err);
    }
}))


passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done)=>{
    try {
        const user = await UserModel.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
})