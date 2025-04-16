import React from "react";
import PropTypes from "prop-types";

function Button({ onClick, children, className, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    className: "",
    disabled: false,
};

export default Button;