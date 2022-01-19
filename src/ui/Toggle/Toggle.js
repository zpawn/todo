import React from 'react';

const Toggle = ({ checked, onChange }) => (
    <div className='form-switch'>
        <input
            type='checkbox'
            className='form-check-input'
            role='switch'
            checked={checked}
            onChange={onChange}
        />
    </div>
);

export default Toggle;
