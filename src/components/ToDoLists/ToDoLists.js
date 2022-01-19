import React from 'react';
import Filter from '../../ui/Filter';
import ListsList from './ListsList';

const ToDoLists = () => {
    return (
        <>
            <Filter placeholder='search by list'/>
            <ListsList/>
        </>
    )
};

export default ToDoLists;
