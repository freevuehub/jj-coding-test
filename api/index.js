const express = require('express');
const app = express();

app.get('/todo/list', function(req, res) {
  console.log(req, res);

  const test = {
    aa: 1,
    bb: 2,
    cc: 3,
    req: req,
    res: res
  };

  res.send(test);
});

module.exports = {
  path: '/api',
  handler: app
};
