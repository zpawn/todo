const actions = Object.freeze({
    SET_NEW_LIST: 'newList/setNewList',
    TOGGLE_VISIBLE: 'newList/toggleShow',
    SET_HIDDEN: 'newList/setHidden',
});

const toggleShow = () => ({ type: actions.TOGGLE_VISIBLE });

const setHidden = () => ({ type: actions.SET_HIDDEN });

const setNewList = (payload) => ({ type: actions.SET_NEW_LIST, payload });

export { actions, setNewList, toggleShow, setHidden };
