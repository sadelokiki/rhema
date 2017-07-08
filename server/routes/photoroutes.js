const router = require('express').Router();
const Photo = require('../controllers/photos');

module.exports = function(app) {
  router.route('/photos')
    .post(Photo.createPhoto)
    .get(Photo.getPhotos)

  router.route('/photos/:id')
    .get(Photo.getOnePhoto)
    .put(Photo.updatePhoto)
    .delete(Photo.deletePhoto)

  app.use('/', router);
}