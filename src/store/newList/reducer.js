import { actions } from './actions';

const initState = {
    value: '',
    visible: true,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_NEW_LIST: return { ...state, value: action.payload };
        case actions.TOGGLE_VISIBLE: return { ...state, visible: !state.visible };
        case actions.SET_HIDDEN: return { ...state, visible: false };
        default: return state;
    }
};

export { reducer };
