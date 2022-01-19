import React from 'react';
import Input from '../Input';
import s from './Filter.module.css';

const Filter = ({ placeholder }) => {
    return (
        <div className={s.filter}>
            <Input placeholder={placeholder}/>
        </div>
    )
};

export default Filter;
