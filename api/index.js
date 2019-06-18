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
    await state.setTodo({
      ...bodyData,
      checked: true
    }, 'jjCompleteList');
    await state.delTodo(req.params.key, 'jjTodoList');
  } else {
    await state.setTodo({
      ...bodyData,
      checked: false
    }, 'jjTodoList');
    await state.delTodo(req.params.key, 'jjCompleteList');
  }

  res.send({
    status: 200,
    message: '반영되었습니다.'
  });
});

app.put(`/todo/:key/edit`, async (req, res) => {
  const data = await state.getTodo();
  const bodyData = data.todo.filter(l => `${l.idx}` === `${req.params.key}`)[0];

  await state.editTodo(
    req.params.key,
    {
      ...bodyData,
      title: req.body.title,
      comment: req.body.comment
    },
    'jjTodoList'
  );

  res.send({
    status: 200,
    message: '반영되었습니다.'
  });
});

app.delete(`/todo/delete/:key/:type`, async (req, res) => {
  if (req.params.type === 'todo') {
    await state.delTodo(req.params.key, 'jjTodoList');
  } else {
    await state.delTodo(req.params.key, 'jjCompleteList');
  }

  res.send({
    status: 200,
    message: '삭제되었습니다.'
  });
});

module.exports = {
  path: '/api',
  handler: app
};
