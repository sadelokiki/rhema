const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const path = require('path');

mongoose.connect(config.database);

module.exports = function() {
  let app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  app.use(express.static(path.join(__dirname, 'dist')));

  require('../server/routes/bookroutes')(app);
  require('../server/routes/extensionroutes')(app);
  require('../server/routes/eventroutes')(app);
  require('../server/routes/messageroutes')(app);
  require('../server/routes/photoroutes')(app);

  return app;
}