import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../../../ui/Button';
import Icon from '../../../ui/Icon';

const ListItem = ({ path, title, children }) => {
    const location = useLocation();
    const isActive = location.pathname === `/${path}`;

    return (
        <tr className={isActive ? 'table-warning' : ''}>
            <td className='d-flex w-100 justify-content-between'>
                {children
                    ? children
                    : (
                        <>
                            <NavLink to={path}>{title}</NavLink>
                            <span>
                                <Button variant='link'><Icon name='pencil'/></Button>
                                <Button variant='link'><Icon name='x-lg' color='danger'/></Button>
                            </span>
                        </>
                    )
                }
            </td>
        </tr>
    )
}

export default ListItem;

