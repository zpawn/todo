import { setToken } from '../auth';

const actions = Object.freeze({
    INIT_COMPLETE: 'app:initComplete',
});

const initComplete = () => ({ type: actions.INIT_COMPLETE });

const initApp = () => (dispatch) => {
    const token = localStorage.getItem('todo:token');

    if (token) {
        dispatch(setToken({ token }))
    }

    dispatch(initComplete());
}

export { actions, initApp };
