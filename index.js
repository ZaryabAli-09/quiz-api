import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server is listening on 5000");
  dbConnection();
});
const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zaryabkhan248:hqifW05ytnEavHnN@cluster0.hy9ppo4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected");
  } catch (err) {
    console.log(err, "db not connected");
  }
};
