const express = require('express');
const app = express();

app.get('/todo/list', function(req, res) {
  const now = new Date();

  res.send({
    status: 200,
    items: {
      list: [
        {
          idx: 1,
          date: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
          title: 'jj 코딩 테스트',
          comment: '코딩 테스트 준비'
        }
      ]
    }
  });
});

module.exports = {
  path: '/api',
  handler: app
};
