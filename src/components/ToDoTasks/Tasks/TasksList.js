import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const Tasks = () => {
    const { listId } = useParams();
    const tasks = useSelector(state => state.todo.lists[listId]?.tasks || {});

    return Object.keys(tasks).map((key) => <TaskItem key={key} {...tasks[key]}/>)
};

export default Tasks;
