const app = require('./config/express')();
const port = process.env.PORT || 3030;

app.listen(port, function() {
  console.log('App up and running on port:' + port);
})

module.exports = app;
