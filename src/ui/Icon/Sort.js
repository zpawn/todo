import React from 'react';
import Icon from './Icon';

const IconSort = ({ fill }) => (
    <Icon name={`caret-down${!fill ? '' : '-fill'}`}/>
)

export default IconSort;
