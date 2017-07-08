const router = require('express').Router();
const Extension = require('../controllers/churchExtensions');

module.exports = function(app) {
  router.route('/extensions')
    .post(Extension.createExtension)
    .get(Extension.getExtensions)

  router.route('/extensions/:id')
    .get(Extension.getOneExtension)
    .put(Extension.updateExtension)
    .delete(Extension.deleteExtension)

  app.use('/', router);
}