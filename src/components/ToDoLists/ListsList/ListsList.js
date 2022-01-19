import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../ui/Button';
import { setNewList, setHidden, toggleShow } from '../../../store/newList';
import { addNewList } from '../../../store/todo';
import NewItemForm from '../../NewItemForm';
import ListItem from './ListItem';

const ListsList = () => {
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.todo.lists);
    const newList = useSelector((state) => state.newList.value);
    const isVisibleNewList = useSelector((state) => state.newList.visible);

    const onClickShow = () => dispatch(toggleShow());

    const onCancelNew = () => dispatch(setHidden());

    const onDoneNew = () => dispatch(addNewList(newList));

    const onChangeNew = (e) => {
        dispatch(setNewList(e.target.value));
    }

    return (
        <>
            <table className='table'>
                <tbody>
                    {Object.keys(lists).length > 0
                        ? Object.keys(lists).map((id) => (
                            <ListItem key={id} {...lists[id]}/>
                        ))
                        : <ListItem>Empty</ListItem>
                    }
                    {!isVisibleNewList ? null : (
                        <ListItem>
                            <NewItemForm
                                placeholder='New List'
                                value={newList}
                                onChange={onChangeNew}
                                onDone={onDoneNew}
                                onCancel={onCancelNew}
                            />
                        </ListItem>
                    )}
                </tbody>
            </table>
            <Button wide onClick={onClickShow}>New List</Button>
        </>
    );
};

export default ListsList;
