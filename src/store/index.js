import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { reducer as todoReducer } from './todo';
import { reducer as newListReducer } from './newList';
import { reducer as authReducer } from './auth';
import { reducer as appReducer } from './app';

const enhancers = composeWithDevTools(
    applyMiddleware(thunk),
);

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    todo: todoReducer,
    newList: newListReducer,
});

const store = createStore(rootReducer, enhancers);

export { store };
