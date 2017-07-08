const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const eventSchema = new Schema({
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
  },
  theme: {
    type: String,
    required: false
  },
  venue: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('event', eventSchema);