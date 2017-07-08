const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const churchExtensionSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
  },
  sundayService: {
    type: String,
    required: true
  },
  midweekService: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('churchExtension', churchExtensionSchema);