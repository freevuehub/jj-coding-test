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
}
