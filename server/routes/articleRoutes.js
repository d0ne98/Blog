import express from "express";
import * as articleController from "../controllers/articleController.js";

const router = express.Router();

router.get('/',articleController.getAllArticles);
router.get('/:id',articleController.getArticleByID);
router.post('/create', articleController.createArticle);
router.delete('/delete/:id', articleController.deleteArticle);
router.put('/edit', articleController.editArticle);


export default router;