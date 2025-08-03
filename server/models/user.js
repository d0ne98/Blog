import db from "../db.js";


export async function createUser(username, password) {
    try {
        const response = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",[username, password]);
        return response.rows[0];
    } catch (err) {
        throw err;
    }
}

export async function findByUsername(username) {
    try {
        const response = await db.query("SELECT * FROM users WHERE username= $1",[username]);
        return response.rows[0];
    } catch (err) {
        throw err;
    }
}

export async function findById(id) {
    try {
        const response = await db.query("SELECT * FROM users WHERE id = $1",[id]);
        return response.rows[0];
    } catch (err) {
        throw err;
    }
}