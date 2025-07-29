import * as ArticleModel from "../models/article.js";


export async function getAllArticles(req, res) {
    try {
        const articles = await ArticleModel.getAllArticles();
        res.status(200).json(articles);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: "Failed to fetch articles." }); 
    }
}

export async function getArticleByID(req, res) {
    try {
        const article = await ArticleModel.getArticleByID(req.params.id);
        res.status(200).json(article); 
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: "Failed to fetch article." }); 
    }
}

export async function createArticle(req, res) {
    const {category_id, title, summary, date, read_time, full_text} = req.body;
    try {
        const article = await ArticleModel.createArticle(category_id, title, summary, date, read_time, full_text);
         res.status(200).json(article.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create article." });
    }
}


export async function deleteArticle(req, res) {
    
    try {
        await ArticleModel.deleteArticle(req.params.id);
        res.status(200).json("Deleted."); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete article." });
    }
}


export async function editArticle(req, res) {
    const {category_id, title, summary, date, read_time, full_text, id} = req.body;
    try {
        await ArticleModel.editArticle(category_id, title, summary, date, read_time, full_text, id);
        res.status(200).json("Edited");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to edit article." })
    }
}