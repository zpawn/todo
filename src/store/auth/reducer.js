import { actions } from './actions';

const initState = {
    token: null,
    refreshToken: null,
};

const setToken = (state, { token = null, refreshToken = null } = {}) => {
    return { ...state, token, refreshToken }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_TOKEN: return setToken(state, action.payload);
        case actions.REMOVE_TOKEN: return { ...state, token: null };
        default: return state
    }
};

export { reducer };
