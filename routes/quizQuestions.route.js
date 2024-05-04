import express from "express";
import {
  uploadQuizQuestion,
  getQuizQuestions,
} from "../controllers/quizQuestions.controller.js";
const router = express.Router();

router.post("/upload", uploadQuizQuestion);
router.get("/get", getQuizQuestions);
export default router;
