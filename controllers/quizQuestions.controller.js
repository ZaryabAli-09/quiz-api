import quizQuestionModel from "../models/quiz.Questions.model.js";
const uploadQuizQuestion = async (req, res, next) => {
  try {
    const { question, optionA, optionB, optionC, optionD, correct } = req.body;
    if (!question || !optionA || !optionB || !optionC || !optionD || !correct) {
      return res.status(400).json("please fill all the required fields");
    }
    const quizQuestion = new quizQuestionModel({
      ...req.body,
    });
    const savedQuizQues = await quizQuestion.save();
    console.log(savedQuizQues);
    res.status(201).json(savedQuizQues);
  } catch (err) {
    next(err);
  }
};
const getQuizQuestions = async (req, res, next) => {
  try {
    const allQuizQues = await quizQuestionModel.find();
    return res.status(200).json(allQuizQues);
  } catch (err) {
    next(err);
  }
};

const deleteQuizQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteQuizQues = await quizQuestionModel.findByIdAndDelete(id);
    return res.status(200).json(deleteQuizQues);
  } catch (err) {
    next(err);
  }
};
const updateQuizQuestion = async (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const updatedQuizQues = await quizQuestionModel.findByIdAndUpdate(
      id,
      {
        $set: {
          question: req.body.question,
          optionA: req.body.optionA,
          optionB: req.body.optionB,
          optionC: req.body.optionC,
          optionD: req.body.optionD,
          correct: req.body.correct,
          category: req.body.correct,
          difficulty: req.body.difficulty,
        },
      },
      { new: true }
    );
    return res.status(201).json(updatedQuizQues);
  } catch (err) {
    next(err);
  }
};
export {
  uploadQuizQuestion,
  getQuizQuestions,
  deleteQuizQuestion,
  updateQuizQuestion,
};
