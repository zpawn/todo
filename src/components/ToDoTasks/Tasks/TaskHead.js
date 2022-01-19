import React from 'react';
import IconSort from '../../../ui/Icon/Sort';

const TaskHead = () => (
    <table className='table'>
        <thead>
        <tr>
            <th width='55%'>
                <IconSort />&nbsp;Title
            </th>
            <th width='30%'>
                <IconSort fill={true} />&nbsp;Deadline
            </th>
            <th width='15%'>
                <IconSort />&nbsp;Done
            </th>
        </tr>
        </thead>
    </table>
);

export default TaskHead;
