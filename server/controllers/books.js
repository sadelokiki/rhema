var Book = require('../models/books');

module.exports = {
  createBook: function(req, res) {
    var book = new Book({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description
    })
    book.save(function(err, savedBook) {
      err ? res.status(404).json(err) : res.send(savedBook);
    });
  },

  getBooks: function(req, res) {
    Book.find({}, function(err, allBooks) {
      err ? res.status(404).json(err) : res.send(allBooks);
    })
  },

  getOneBook: function(req, res) {
    Book.find({_id: req.params.id}, function(err, book) {
      err ? res.status(404).json(err) : res.send(book);
    })
  },

  updateBook: function(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
      err ? res.status(404).json(err) : res.send(book);
    })
  },

  deleteBook: function(req, res) {
    Book.remove({_id: req.params.id}, function(err, book) {
      err ? res.status(404).json(err) : res.send(book);
    })
  }
}