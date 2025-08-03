import express from "express";
import * as articleController from "../controllers/articleController.js";
import ensureAuthenticated from "../middleware/authMiddleware.js"

const router = express.Router();

router.get('/',articleController.getAllArticles);
router.get('/:id',articleController.getArticleByID);
router.post('/create', ensureAuthenticated, articleController.createArticle);
router.delete('/delete/:id',ensureAuthenticated, articleController.deleteArticle);
router.put('/edit', ensureAuthenticated, articleController.editArticle);



export default router;