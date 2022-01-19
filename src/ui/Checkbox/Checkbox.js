import React from 'react';

const Checkbox = ({ label, ...props }) => (
    <div className='form-check'>
        <label className='form-check-label'>
            <input className='form-check-input' type='checkbox' {...props}/>
            {label && ` ${label}`}
        </label>
    </div>
);

export default Checkbox;
