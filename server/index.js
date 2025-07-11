import express from "express";
import cors from "cors";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3001;
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

db.connect();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const articles = [];
let idCount = 1;

// express routes 
app.post("/api/articles/create", async (req, res)=>{
    
    const {topic, title, summary, date, readTime, fullText} = req.body;
    const article = await db.query("INSERT INTO articles (topic, title, summary, date, readtime, fulltext) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [topic, title, summary, date, readTime, fullText]);
    
    res.json(article.rows[0]);
});

app.get("/api/articles", async (req, res)=>{
    const response = await db.query("SELECT * FROM articles");
    const articles = response.rows;
    res.json(articles);
})

app.get("/api/article/:id", async (req, res)=>{
    const id = parseInt(req.params.id);
    const response = await db.query("SELECT * FROM articles WHERE id=$1", [id]);
    const post = response.rows[0];
    res.json(post);
})





app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})