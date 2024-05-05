import express from "express";
import {
  uploadQuizQuestion,
  getQuizQuestions,
  deleteQuizQuestion,
  updateQuizQuestion,
} from "../controllers/quizQuestions.controller.js";
const router = express.Router();

router.post("/upload", uploadQuizQuestion);
router.get("/get", getQuizQuestions);
router.delete("/delete/:id", deleteQuizQuestion);
router.put("/update/:id", updateQuizQuestion);
export default router;
