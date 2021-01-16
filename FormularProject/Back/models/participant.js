const mongoose = require('mongoose');
const { Schema } = mongoose;


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


module.exports = mongoose.model('Participant', ParticipantiSchema);