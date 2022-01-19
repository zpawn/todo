import isEmpty from 'ramda/src/isEmpty';
import { UNKNOWN_HTTP_CODE } from '../utils/constants';

const baseService = (url, { body = {}, headers = {}, method = 'GET' } = {}) => {
    const config = {
        method,
        body: !isEmpty(body) ? JSON.stringify(body) : null,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        }
    };

    return fetch(url, config)
        .catch((err) => {
            console.log('[BASE_SERVICE:CATCH]', err)
            return Promise.reject({
                code: err.status || UNKNOWN_HTTP_CODE,
                text: err.statusText || 'Unknown',
                message: err.message || 'Unknown',
            });
        })
        .then(async (res) => {
            const response = await res.json();

            if (response?.error) {
                return Promise.reject({
                    code: res.status,
                    text: res.statusText,
                    message: response?.error?.message || response?.error || 'Unknown',
                });
            }

            return response;
        })
        .then((data) => {
            return data;
        })
};

export { baseService };
