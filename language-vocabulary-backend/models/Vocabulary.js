const mongoose = require('mongoose');

const VocabularySchema = new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
  date: { type: Date, default: Date.now },
  remembered: { type: Boolean, default: false }
});

module.exports = mongoose.model('Vocabulary', VocabularySchema);
