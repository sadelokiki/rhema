const router = require('express').Router();
const Event = require('../controllers/events');

module.exports = function(app) {
  router.route('/events')
    .post(Event.createEvent)
    .get(Event.getEvents)

  router.route('/events/:id')
    .get(Event.getOneEvent)
    .put(Event.updateEvent)
    .delete(Event.deleteEvent)

  app.use('/', router);
}