const express = require('express');
const bodyParser = require('body-parser');
const state = require('./TodoList');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/todo/list', async (req, res) => {
  const { todo, complete } = await state.getTodo();

  res.send({
    status: 200,
    items: {
      todo: [
        ...todo
      ],
      complete: [
        ...complete
      ]
    }
  });
});

app.post(`/todo/list/add`, async (req, res) => {
  await state.setTodo(req.body, 'jjTodoList');

  res.send({
    status: 200,
    message: '추가되었습니다.'
  });
});

app.put(`/todo/list/:key`, async (req, res) => {
  const data = await state.getTodo();

  const bodyData = data[req.body.type].filter(l => `${l.idx}` === `${req.params.key}`)[0];

  if (req.body.type === 'todo') {
    await state.setTodo(bodyData, 'jjCompleteList');
    await state.delTodo(req.params.key, 'jjTodoList');
  } else {
    await state.setTodo(bodyData, 'jjTodoList');
    await state.delTodo(req.params.key, 'jjCompleteList');
  }

  res.send({
    status: 200,
    message: '.'
  });
});

module.exports = {
  path: '/api',
  handler: app
};
