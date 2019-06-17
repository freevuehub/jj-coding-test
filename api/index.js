const express = require('express');
const app = express();

app.get('/todo/list', function(req, res) {
  const now = new Date();

  res.send({
    status: 200,
    items: {
      todo: [
        {
          idx: 1,
          date: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
          title: 'jj 코딩 테스트',
          comment: '코딩 테스트 준비',
          checked: false
        }
      ],
      complete: [
        {
          idx: 2,
          date: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
          title: '프로젝트 생성',
          comment: '코딩 테스트 프로젝트 생성',
          checked: true
        }
      ]
    }
  });
});

module.exports = {
  path: '/api',
  handler: app
};
