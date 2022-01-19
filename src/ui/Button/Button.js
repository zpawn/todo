import React from 'react';

/**
 * @param {string} type
 * @param {string} variant primary|secondary|success|danger|warning|info|light|dark|link|outline-primary|outline-secondary|outline-success|outline-danger|outline-warning|outline-info|outline-light|outline-dark
 * @param {function} onClick
 * @param {string} className
 * @param {boolean} wide
 * @param {string} size lg|sm
 * @param {JSX.Element} children
 * @param {any[]} props
 */
const Button = ({ type = 'button', variant = 'primary', onClick, className, wide, size, children, ...props }) => {
    const classNames = [`btn`, `btn-${variant}`];

    if (className) {
        classNames.push(className);
    }

    if (size === 'lg') {
        classNames.push('btn-lg');
    } else if (size === 'sm') {
        classNames.push('btn-sm');
    }

    const renderButton = () => (
        <button
            type={type}
            className={classNames.join(' ')}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )

    return !wide
        ? renderButton()
        : (<div className='d-grid'>{renderButton()}</div>)
};

export default Button;
