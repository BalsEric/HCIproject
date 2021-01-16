
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Question = require("./question");
const  Formular = require("./formular");


const ParticipantiSchema = new Schema({
  agree: Boolean,
  personalCode: String,
  firstLetterOfTheTownBornIn: String,
  firstLetterOfTheRegionBornIn: String,
  sumOfTheLast2DigitsOfBirthYear: String,
  sumOfDayAndMonth: String,
  age: String,
  type: String,
  personalType: String,
  militaryGrade: String,
  workedFor: String,
  workedInThisMilitaryUnityFor: String,
  hoursPerDay: String,
  workingInTours: String,
  program: String
});

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

const ParticipantDataSchema = new Schema({
    participant: ParticipantiSchema,
    brochure: SceneSchema,
    answers: { type : Array , "default" : [][50] }
})

module.exports = mongoose.model('ParticipantData', ParticipantDataSchema);