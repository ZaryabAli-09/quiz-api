import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      unique: true,
    },
    optionA: {
      type: String,
      required: true,
    },
    optionB: {
      type: String,
      required: true,
    },
    optionC: {
      type: String,
      required: true,
    },
    optionD: {
      type: String,
      required: true,
    },
    correct: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "quizzes",
  }
);
const quizQuestionModel = mongoose.model("Quiz", quizQuestionSchema);
export default quizQuestionModel;
