const router = require('express').Router();
const Book = require('../controllers/books');

module.exports = function(app) {
  router.route('/books')
    .post(Book.createBook)
    .get(Book.getBooks)

  router.route('/books/:id')
    .get(Book.getOneBook)
    .put(Book.updateBook)
    .delete(Book.deleteBook)

  app.use('/', router);
}