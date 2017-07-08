const router = require('express').Router();
const Message = require('../controllers/messages');

module.exports = function(app) {
  router.route('/messages')
    .post(Message.createMessage)
    .get(Message.getMessages)

  router.route('/messages/:id')
    .get(Message.getOneMessage)
    .put(Message.updateMessage)
    .delete(Message.deleteMessage)

  app.use('/', router);
}