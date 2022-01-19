import React from 'react';
import Icon from '../../../ui/Icon';
import Toggle from '../../../ui/Toggle';
import Button from '../../../ui/Button';

const TaskItem = ({ title }) => {
    return (
        <tr>
            <td width='55%'>
                <div className='d-flex w-100 justify-content-between'>
                    <form>
                        <span>{title}</span>
                    </form>
                    <span>
                        <Button variant='link'><Icon name='pencil'/></Button>
                        <Button variant='link'><Icon name='x-lg' color='danger'/></Button>
                    </span>
                </div>
            </td>
            <td width='30%'>
                01.01.2022
            </td>
            <td width='15%' align='center'>
                <Toggle/>
            </td>
        </tr>
    )
};

export default TaskItem
