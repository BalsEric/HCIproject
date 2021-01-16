const mongoose = require('mongoose');
const { Schema } = mongoose;


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

module.exports = mongoose.model('Formular', FormularSchema);