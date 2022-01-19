import React from 'react';

/**
 * @param name {string}
 * @param color {string} primary|secondary|success|info|warning|danger|light|dark
 * @return {null|JSX.Element}
 * @constructor
 */
const Icon = ({ name, color }) => {
    const classNames = [`bi-${name}`];

    if (color) {
        classNames.push(`text-${color}`);
    }

    return !name ? null : <i className={classNames.join(' ')} />
}

export default Icon;
