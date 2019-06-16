import Config from './Config';

export default {
  getList: () => {
    return new Promise((resolve, reject) => {
      Config.get(`/todo/list`)
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });
  },
}
