import clone from 'ramda/src/clone';
import { actions } from './actions';

const initState = {
    lists: {},
};

const addNewList = (state, payload) => {
    const newState = clone(state);
    newState.lists[payload.id] = payload;
    return newState;
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_NEW_LIST: return addNewList(state, action.payload);
        case actions.SET_LISTS: return { ...state, lists: action.payload };
        default: return state;
    }
}

export { reducer };

