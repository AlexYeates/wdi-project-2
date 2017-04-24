const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema({
  urlToImage: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Highligh', highlightSchema);
