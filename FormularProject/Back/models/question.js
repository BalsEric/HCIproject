const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  type: String,
  text: String,
  answers: String
});

module.exports = mongoose.model('Question', QuestionSchema);