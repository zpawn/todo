import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadList } from '../store/todo';
import ToDoLists from '../components/ToDoLists';
import ToDoTasks from '../components/ToDoTasks';

const ToDo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
    }, []);

    return (
        <>
            <h1 className="text-center">ToDo List</h1>

            <div className="row">
                <div className="col-md-4">
                    <ToDoLists />
                </div>
                <div className="col-md-8">
                    <ToDoTasks />
                </div>
            </div>
        </>
    );
}

export default ToDo;
