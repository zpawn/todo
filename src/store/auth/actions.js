import { signInService } from './services';
import { history } from '../../history';

const actions = Object.freeze({
    SET_TOKEN: 'auth:setToken',
    REMOVE_TOKEN: 'auth:removeToken',
});

const setToken = (payload) => ({ type: actions.SET_TOKEN, payload });

const removeToken = () => ({ type: actions.REMOVE_TOKEN });

const signOut = () => (dispatch) => {
    localStorage.removeItem('todo:token');
    dispatch(removeToken());
};

const signIn = (email, password) => (dispatch) => {
    return signInService(email, password)
        .then((res) => {
            const { expiresIn, idToken, refreshToken } = res

            localStorage.setItem('todo:token', idToken);
            dispatch(setToken({
                token: idToken,
                refreshToken,
            }));

            setTimeout(() => dispatch(removeToken()), expiresIn);

            history.push('/');
        })
        .catch((err) => console.log('[AUTH:SIGN_IN:CATCH]', err));
};

export { actions, setToken, removeToken, signIn, signOut };
