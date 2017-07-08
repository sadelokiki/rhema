const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('book', bookSchema);