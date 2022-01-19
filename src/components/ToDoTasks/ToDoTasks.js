import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Filter from '../../ui/Filter';
import Button from '../../ui/Button';
import TaskHead from './Tasks/TaskHead';
import NewItemForm from '../NewItemForm';
import NoItem from './Tasks/NoItem';
import TasksList from './Tasks/TasksList';

const ToDoTasks = () => {
    return (
        <>
            <Filter placeholder='search by list'/>
            <div className='mb-3'>
                <TaskHead/>
                <table className="table">
                    <tbody>
                    <Routes>
                        <Route path='/' element={<NoItem/>}/>
                        <Route path='/:listId' element={<TasksList/>}/>
                    </Routes>
                    </tbody>
                </table>
                <NewItemForm placeholder='New List'/>
            </div>
            <Button wide>New Task</Button>
        </>
    )
};

export default ToDoTasks;
