const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const messageSchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true
  },
  preacher: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  series: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('message', messageSchema);