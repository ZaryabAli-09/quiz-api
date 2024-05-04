import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import quizQuestionsRoutes from "./routes/quizQuestions.route.js";
const app = express();

dotenv.config();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.use(express.json());

app.use("/api/quiz/questions", quizQuestionsRoutes);
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
  dbConnection();
});

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.log(err, "db not connected");
  }
};
