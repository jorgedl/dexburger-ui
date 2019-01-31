import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './less/Button.less';

function Button({
    children,
    onClick,
    variant
}) {
    const buttonClasses = classNames('button', {
        [`button--${variant}`]: variant !== undefined
    });

    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={onClick}
        >
            { children }
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string
};

Button.defaultProps = {
    children: '',
    onClick: () => {},
    variant: undefined
};

export default Button;
