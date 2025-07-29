import express from "express";
import cors from "cors";
import articleRoutes from "./routes/articleRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();
const port = 3001;



//middlewares 
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/article', articleRoutes);
app.use('/api/category', categoryRoutes);



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})