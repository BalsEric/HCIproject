const mongoose = require('mongoose');
const { Schema } = mongoose;
const Question = require("./question");
const  Formular = require("./formular");

const QuestionSchema = new Schema({
  type: String,
  text: String,
  answers:String
});
const FormularSchema = new Schema({
  title: String,
  description: String,
  questions: [ QuestionSchema]
});

const SceneSchema = new Schema({
  title: String,
  scenes: [FormularSchema]
});

module.exports = mongoose.model('Scene', SceneSchema);