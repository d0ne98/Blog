import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const articles = [];
let idCount = 1;

app.post("/api/articles/create", (req, res)=>{
    
    const {topic, title, summary, date, readTime, fullText} = req.body;
    const article = {id: idCount++, topic, title, summary, date, readTime, fullText };
    articles.push(article);
});


app.get("/api/articles", (req, res)=>{
    res.json(articles);
})

app.get("/api/article/:id", (req, res)=>{
    const id = req.params.id;
    const post = articles.find(post => post.id === parseInt(id));
    res.json(post);
})






app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})