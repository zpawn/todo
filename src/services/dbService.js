import { baseService } from './baseService';
import { BASE_URL, httpCodes } from '../utils/constants';
import { store } from '../store';
import { history } from '../history';
import { signOut } from '../store/auth';

const dbService = (url, { body, headers = {}, method = 'GET' } = {}) => {
    const config = { method, body, headers };
    const { getState, dispatch } = store;
    const { auth } = getState();

    return baseService(`${BASE_URL}${url}.json?auth=${auth.token}`, config)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            if (err.code === httpCodes.UNAUTHORIZED) {
                dispatch(signOut());
                history.push('/sign-in');
            }
            return Promise.reject(err);
        })
};

export { dbService };
