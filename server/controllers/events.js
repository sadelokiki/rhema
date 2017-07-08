var Event = require('../models/events');

module.exports = {
  createEvent: function(req, res) {
    var event = new Event({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      theme: req.body.theme,
      venue: req.body.venue,
      date: req.body.date
    })
    event.save(function(err, savedevent) {
      err ? res.status(404).json(err) : res.send(savedevent);
    });
  },

  getEvents: function(req, res) {
    Event.find({}, function(err, allevents) {
      err ? res.status(404).json(err) : res.send(allevents);
    })
  },

  getOneEvent: function(req, res) {
    Event.find({_id: req.params.id}, function(err, event) {
      err ? res.status(404).json(err) : res.send(event);
    })
  },

  updateEvent: function(req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, function(err, event) {
      err ? res.status(404).json(err) : res.send(event);
    })
  },

  deleteEvent: function(req, res) {
    Event.remove({_id: req.params.id}, function(err, event) {
      err ? res.status(404).json(err) : res.send(event);
    })
  }
}