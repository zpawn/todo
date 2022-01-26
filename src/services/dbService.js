import { baseService } from './baseService';
import { BASE_URL, httpCodes } from '../utils/constants';
import { history } from '../history';

const dbService = (url, { body, headers = {}, method = 'GET' } = {}) => {
  const config = { method, body, headers };
  const token = localStorage.getItem('todo:token');

  return baseService(`${BASE_URL}${url}.json?auth=${token}`, config)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      if (err.code === httpCodes.UNAUTHORIZED) {
        history.push('/sign-in');
      }
      return Promise.reject(err);
    });
};

export { dbService };
