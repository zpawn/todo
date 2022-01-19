import { actions } from './actions';

const initState = {
    init: false
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.INIT_COMPLETE: return { ...state, init: true };
        default: return state
    }
};

export { reducer };
