import express from "express";
import { uploadQuizQuestion } from "../controllers/quizQuestions.controller.js";
const router = express.Router();

router.post("/upload", uploadQuizQuestion);

export default router;
