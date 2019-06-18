import QS from 'qs';
import Config from './Config';
import { Notification } from 'element-ui';

const ErrorNotification = msg => {
  Notification.error({
    title: 'Error',
    message: msg,
  });

  return fn => fn();
};

export default {
  getList: () => {
    return new Promise((resolve, reject) => {
      Config.get(`/todo/list`)
        .then(({ data }) => resolve(data))
        .catch((err) => ErrorNotification(
            err.response.data.error.message
          )(
            reject(err)
        ));
    });
  },

  addTodo: data => {
    return new Promise((resolve, reject) => {
      Config.post(`/todo/list/add`, data)
        .then(({ data }) => resolve(data))
        .catch((err) => ErrorNotification(
            err.response.data.error.message
          )(
            reject(err)
        ));
    });
  },

  putTodo: (key, type) => {
    return new Promise((resolve, reject) => {
      Config.put(`/todo/list/${key}`, QS.stringify({ type: type }))
        .then(({ data }) => resolve(data))
        .catch((err) => ErrorNotification(
            err.response.data.error.message
          )(
            reject(err)
        ));
    });
  },

  editTodo: (key, data) => {
    return new Promise((resolve, reject) => {
      Config.put(`/todo/${key}/edit`, QS.stringify(data))
        .then(({ data }) => resolve(data))
        .catch((err) => ErrorNotification(
            err.response.data.error.message
          )(
            reject(err)
        ));
    });
  },

  delTodo: (key, type) => {
    return new Promise((resolve, reject) => {
      Config.delete(`/todo/delete/${key}/${type}`)
        .then(({ data }) => resolve(data))
        .catch((err) => ErrorNotification(
            err.response.data.error.message
          )(
            reject(err)
        ));
    });
  },
}
