var Message = require('../models/messages');

module.exports = {
  createMessage: function(req, res) {
    var message = new Message({
      title: req.body.title,
      preacher: req.body.preacher,
      date: req.body.date,
      series: req.body.series
    })
    message.save(function(err, savedmessage) {
      err ? res.status(404).json(err) : res.send(savedmessage);
    });
  },

  getMessages: function(req, res) {
    Message.find({}, function(err, allmessages) {
      err ? res.status(404).json(err) : res.send(allmessages);
    })
  },

  getOneMessage: function(req, res) {
    Message.find({_id: req.params.id}, function(err, message) {
      err ? res.status(404).json(err) : res.send(message);
    })
  },

  updateMessage: function(req, res) {
    Message.findByIdAndUpdate(req.params.id, req.body, function(err, message) {
      err ? res.status(404).json(err) : res.send(message);
    })
  },

  deleteMessage: function(req, res) {
    Message.remove({_id: req.params.id}, function(err, message) {
      err ? res.status(404).json(err) : res.send(message);
    })
  }
}