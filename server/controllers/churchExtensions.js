var Extension = require('../models/churchExtensions');

module.exports = {
  createExtension: function(req, res) {
    var extension = new Extension({
      name: req.body.name,
      address: req.body.address,
      sundayService: req.body.sundayService,
      midweekService: req.body.midweekService
    })
    extension.save(function(err, savedExtension) {
      err ? res.status(404).json(err) : res.send(savedExtension);
    });
  },

  getExtensions: function(req, res) {
    Extension.find({}, function(err, allExtensions) {
      err ? res.status(404).json(err) : res.send(allExtensions);
    })
  },

  getOneExtension: function(req, res) {
    Extension.find({_id: req.params.id}, function(err, extension) {
      err ? res.status(404).json(err) : res.send(extension);
    })
  },

  updateExtension: function(req, res) {
    Extension.findByIdAndUpdate(req.params.id, req.body, function(err, extension) {
      err ? res.status(404).json(err) : res.send(extension);
    })
  },

  deleteExtension: function(req, res) {
    Extension.remove({_id: req.params.id}, function(err, extension) {
      err ? res.status(404).json(err) : res.send(extension);
    })
  }
}