import { Todo } from "../axios";

export const state = () => ({
  list: {
    todo: [],
    complete: []
  }
});

export const mutations = {
  $SetTodoList: (state, payload) => {
    state.list.todo = [ ...payload ];
  },
  $PutTodoList: (state, payload) => {
    state.list.todo = [
      ...state.list.todo,
      ...payload
    ];
  },
  $SetCompleteList: (state, payload) => {
    state.list.complete = [ ...payload ];
  },
  $PutCompleteList: (state, payload) => {
    state.list.complete = [
      ...payload,
      ...state.list.complete
    ];
  },
};

export const actions = {
  $CallGetTodoList: (store) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await Todo.getList();

        store.commit('$SetTodoList', items.todo);
        store.commit('$SetCompleteList', items.complete);

        return resolve(items);
      } catch (e) {
        console.error(e);

        return reject(e);
      }
    });
  },

  $CallAddTodoItem: (store, data) => {
    const todo = store.state.list.todo;

    return new Promise(async (resolve, reject) => {
      try {
        store.commit('$SetTodoList', [
          ...todo,
          {
            checked: false,
            date: data.date.trim(),
            idx: store.state.list.todo.length + store.state.list.complete.length + 1,
            title: data.todo.trim(),
            comment: '',
          }
        ]);

        return resolve();
      } catch (e) {
        console.error(e);

        return reject(e);
      }
    });
  },

  $CallPutTodoItem: (store, { idx, checked }) => {
    const todo = store.state.list.todo;
    const complete = store.state.list.complete;

    return new Promise(async (resolve, reject) => {
      try {
        if (checked) {
          store.commit('$PutCompleteList', [{
            ...todo.filter(l => l.idx === idx)[0],
            checked
          }]);
          store.commit('$SetTodoList', todo.filter(l => l.idx !== idx));
        } else {
          store.commit('$PutTodoList', [{
            ...complete.filter(l => l.idx === idx)[0],
            checked
          }]);
          store.commit('$SetCompleteList', complete.filter(l => l.idx !== idx));
        }

        return resolve();
      } catch (e) {
        console.error(e);

        return reject(e);
      }
    });
  }
};

export const getters = {
  $GetTodoList: state => state.list.todo.reduce((prev, cur) => {
    if (!prev.length) {
      return [{
        date: cur.date,
        items: [cur]
      }]
    }

    return prev.some(n => n.date === cur.date) ? prev.map(m => {
      if (m.date === cur.date) m.items.push(cur);

      return m;
    }) : [
      ...prev,
      {
        date: cur.date,
        items: [cur]
      }
    ];
  }, []).reverse(),
  $GetCompleteList: state => state.list.complete,
};
