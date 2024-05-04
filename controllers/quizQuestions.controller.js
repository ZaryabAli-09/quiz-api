import quizQuestionModel from "../models/quiz.Questionsmodel.js";
const uploadQuizQuestion = async (req, res) => {
  try {
    const { question, optionA, optionB, optionC, optionD, correct } = req.body;
    if (!question || !optionA || !optionB || !optionC || !optionD || !correct) {
      return res.status(400).json("please fill all the required fields");
    }
    const quizQuestion = new quizQuestionModel({
      ...req.body,
    });
    const savedQuizQuestion = await quizQuestion.save();
    console.log(savedQuizQuestion);
    res.status(201).json(savedQuizQuestion);
  } catch (err) {
    console.log(err);
  }
};

export { uploadQuizQuestion };
