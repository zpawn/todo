import React, { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const { type = 'text', valid = true, className, value, onChange, placeholder, ...restProps } = props;

    const classNames = ['form-control'];

    if (className) {
        classNames.push(className);
    }

    if (!valid) {
        classNames.push('is-invalid')
    }

    return (
        <input
            ref={ref}
            className={classNames.join(' ')}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...restProps}
        />
    )
});

export default Input;
