import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import quizQuestionsRoutes from "./routes/quizQuestions.route.js";
const app = express();

app.use(cors());

dotenv.config();
const port = process.env.PORT || 8000;
// ................................................
//middelware for accept json fromat data from request
app.use(express.json());

//home route
app.get("/", (req, res) => {
  res.json({ message: "QuizApi is working" });
});

//routes
app.use("/api/quiz/questions", quizQuestionsRoutes);

// middleware for handling error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//server listening
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
  dbConnection();
});

//db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.log(err, "db not connected");
  }
};
