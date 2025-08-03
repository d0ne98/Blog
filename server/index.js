import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import articleRoutes from "./routes/articleRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import "./config/passport.js";


const app = express();
const port = 3001;



//middlewares 
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/article', articleRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/auth', authRoutes);



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})