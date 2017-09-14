const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const videoSchema = new Schema({
caption:{
type: String,
required: true,
unique: true
},
image: {
type: String,
required: true,
},
event: {
type: String,
required: false,
},
description: {
type: String,
required: false
}
});

module.exports = mongoose.model('video', photoSchema);