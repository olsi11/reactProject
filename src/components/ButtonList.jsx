import React from "react";
import PropTypes from "prop-types";

function ButtonList({ onClick, children, className, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded ${
                disabled
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Ngjyrë gri për gjendjen e çaktivizuar
                    : "bg-blue-500 text-white hover:bg-blue-600" // Ngjyrë e kaltër për gjendjen e aktivizuar
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

ButtonList.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

ButtonList.defaultProps = {
    className: "",
    disabled: false,
};

export default ButtonList;