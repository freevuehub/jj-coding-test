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
  $SetCompleteList: (state, payload) => {
    state.list.complete = [ ...payload ];
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
    })
  }
};

export const getters = {
  $GetTodoList: state => state.list.todo,
  $GetCompleteList: state => state.list.complete,
};
