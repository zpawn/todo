import { baseService } from './baseService';
import { AUTH_URL, API_KEY } from '../utils/constants';

const authService = (url, { body, headers = {}, method = 'POST' } = {}) => {
    const authUrl = `${AUTH_URL}/accounts:${url}?key=${API_KEY}`;
    const config = {
        method,
        body: {
            returnSecureToken: true,
            ...body,
        },
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    return baseService(authUrl, config)
        .then((data) => {
            return data;
        })
};

export { authService };
