import express from "express";
import {register, login, logout, getAuthStatus} from "../controllers/authController.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get('/status', getAuthStatus);


export default router;