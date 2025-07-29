import db from "../db.js";


export async function getAllCategories() {
    try {
        const response = await db.query("SELECT * FROM categories");
        return response.rows;
    } catch (err) {
        throw err;
    }
    
}