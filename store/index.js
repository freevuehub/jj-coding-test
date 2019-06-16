import { Todo } from "../axios";

export const state = () => ({
  Todo: {
    List: []
  }
});

export const mutations = {
  $SetTodoList: (state, payload) => {
    state.Todo.List = [ ...payload ];
  }
};

export const actions = {
  callGetTodoList: (store) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { items } = await Todo.getList();

        store.commit('$SetTodoList', items.list);

        return resolve(items);
      } catch (e) {
        console.error(e);

        return reject(e);
      }
    })
  }
};

export const getters = {
  __TodoList: state => state.Todo.List
};
