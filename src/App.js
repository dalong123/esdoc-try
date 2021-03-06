const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('./Util/Logger.js');
const API = require('./API.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/create', (req, res)=>{
  API.create(req, res).catch((e)=>{
    Logger.e(e);
  });
});

const server = app.listen(3001, 'localhost', function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
