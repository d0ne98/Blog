import db from "../db.js";



export async function getAllArticles() {
    try {
        const response = await db.query(`SELECT articles.* , categories.name AS category FROM articles
                                         JOIN categories ON articles.category_id = categories.id`);
        return response.rows;
    } catch (err) {
        throw err;
    }
}


export async function getArticleByID(id) {
    try {
        const response = await db.query(`SELECT articles.* , categories.name AS category FROM articles
                                          JOIN categories ON articles.category_id = categories.id WHERE articles.id= $1`,[id]);   
        return response.rows[0];
    } catch (err) {
        throw err;
    }
}

export async function createArticle(category_id, title, summary, date, read_time, full_text) {
    try {
        const article = await db.query("INSERT INTO articles (title, summary, date, read_time, full_text, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [title, summary, date, read_time, full_text, category_id]);
        return article;
    } catch (err) {
        throw err;
    }
}


export async function deleteArticle(id) {
    try {
        await db.query("DELETE FROM articles WHERE id=$1",[id]);
    } catch (err) {
        throw err;
    }
}


export async function editArticle(category_id, title, summary, date, read_time, full_text, id) {
    try {
        await db.query("UPDATE articles SET  title = $1, summary = $2, date = $3, read_time = $4, full_text = $5, category_id = $6 WHERE id = $7 ",
        [title, summary , date, read_time, full_text, category_id, id ]);

    } catch (err) {
        throw err;
    }
}