import * as CategoryModel from "../models/category.js";

export async function getAllCategories(req, res) {
    try {
        const categories = await CategoryModel.getAllCategories();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: "Failed to fetch categories." });
    }
}