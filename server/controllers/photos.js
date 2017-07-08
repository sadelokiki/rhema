var Photo = require('../models/photos');

module.exports = {
  createPhoto: function(req, res) {
    var photo = new Photo({
      caption: req.body.caption,
      image: req.body.image,
      event: req.body.event,
      description: req.body.description
    })
    photo.save(function(err, savedphoto) {
      err ? res.status(404).json(err) : res.send(savedphoto);
    });
  },

  getPhotos: function(req, res) {
    Photo.find({}, function(err, allphotos) {
      err ? res.status(404).json(err) : res.send(allphotos);
    })
  },

  getOnePhoto: function(req, res) {
    Photo.find({_id: req.params.id}, function(err, photo) {
      err ? res.status(404).json(err) : res.send(photo);
    })
  },

  updatePhoto: function(req, res) {
    Photo.findByIdAndUpdate(req.params.id, req.body, function(err, photo) {
      err ? res.status(404).json(err) : res.send(photo);
    })
  },

  deletePhoto: function(req, res) {
    Photo.remove({_id: req.params.id}, function(err, photo) {
      err ? res.status(404).json(err) : res.send(photo);
    })
  }
}