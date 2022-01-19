import { actions as newListActions } from '../newList';
import { loadListService, addNewListService } from './services';

const actions = Object.freeze({
    ADD_NEW_LIST: 'todo/addNewList',
    SET_LISTS: 'todo/setLists',
});

const setLists = (payload) => ({ type: actions.SET_LISTS, payload });

const loadList = () => (dispatch) => {
    loadListService()
        .then((data) => {
            dispatch(setLists(data))
        })
        .catch((err) => {
            console.log('[LISTS:ACTIONS:CATCH]', err)
        });
};

const addNewList = (payload) => (dispatch) => {
    const newList = {
        title: payload.trim(),
        path: payload.trim().toLowerCase().replace(' ', '-'),
    }

    addNewListService(newList)
        .then((data) => {
            newList.id = data.name;
            dispatch({ type: newListActions.SET_NEW_LIST, payload: '' });
            dispatch({ type: newListActions.SET_HIDDEN });
            dispatch({ type: actions.ADD_NEW_LIST, payload: newList });
        })
        .catch((err) => {
            console.log('[NEW:ACTIONS:CATCH]', err)
        })
};

export { actions, addNewList, loadList };
