'use strict';

const express = require('express');

const ping = express();

ping.get('/ping', function(req, res) {
  res.send('pong');
});

ping.listen(8080);
console.log('Ping listening');
