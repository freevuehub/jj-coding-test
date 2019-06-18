const localStorage = require('localStorage');

const getLocal = type => localStorage.getItem(type) || JSON.stringify({ list: [] });
const setLocal = (type, data) => localStorage.setItem(type, JSON.stringify({ list: data }));

const getTodo = () => new Promise(resolve => resolve({
  todo: JSON.parse(getLocal('jjTodoList')).list,
  complete: JSON.parse(getLocal('jjCompleteList')).list
}));

const setTodo = (data, type) => new Promise(resolve => {
  const list = [
    ...JSON.parse(getLocal(type)).list,
    data
  ];

  setLocal(type, list);

  return resolve();
});

const editTodo = (key, data, type) => new Promise(resolve => {
  setLocal(type, JSON.parse(getLocal(type)).list.map(
    l => `${l.idx}` === `${key}` ? data : l
  ));

  return resolve();
});

const delTodo = (key, type) => new Promise(resolve => {
  setLocal(
    type,
    JSON.parse(getLocal(type)).list.filter(
      l => `${l.idx}` !== `${key}`
    )
  );

  return resolve();
});

export {
  getTodo,
  setTodo,
  editTodo,
  delTodo,
};
