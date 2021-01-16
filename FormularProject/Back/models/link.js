const mongoose = require('mongoose');
const { Schema } = mongoose;

const LinkSchema = new Schema({
  brochure: String,
  url: String
});

module.exports = mongoose.model('Link', LinkSchema);