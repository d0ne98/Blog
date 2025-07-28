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

//middlewares 
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// express routes 
app.post("/api/articles/create", async (req, res)=>{
    const {category_id, title, summary, date, read_time, full_text} = req.body;
    try{
    const article = await db.query("INSERT INTO articles (title, summary, date, read_time, full_text, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [title, summary, date, read_time, full_text, category_id]);
    res.status(200).json(article.rows[0]);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: "Failed to create article." });
    }
});

app.get("/api/articles", async (req, res)=>{
    try {
        const response = await db.query(`SELECT articles.* , categories.name AS category FROM articles
                                          JOIN categories ON articles.category_id = categories.id`);
        const articles = response.rows;
        res.status(200).json(articles);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: "Failed to fetch articles." }); 
    }
    
})

app.get("/api/article/:id", async (req, res)=>{
    const id = parseInt(req.params.id);
    try {
        
        const response = await db.query(`SELECT articles.* , categories.name AS category FROM articles
                                          JOIN categories ON articles.category_id = categories.id`);   
        const post = response.rows[0];
        res.status(200).json(post);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: "Failed to fetch article." });   
    }
    
})

app.delete("/api/article/delete/:id", async (req, res)=>{
    const id = parseInt(req.params.id);
    try {
       
       await db.query("DELETE FROM articles WHERE id=$1",[id]);
       res.status(200).json("Deleted.");     
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete article." });
    }

})

app.put("/api/article/edit",async (req, res)=>{
    const article = req.body;
    try {
        await db.query("UPDATE articles SET  title = $1, summary = $2, date = $3, read_time = $4, full_text = $5, category_id = $6 WHERE id = $7 ",
        [article.title, article.summary , article.date, article.read_time, article.full_text,article.category_id, article.id ]
       );
       res.status(200).json("Edited");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to edit article." })
    }
})


app.get("/api/categories", async (req, res)=>{
    try {
        const response = await db.query("SELECT * FROM categories");
        res.status(200).json(response.rows);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: "Failed to fetch categories." });
    }
})



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
})