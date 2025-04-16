import React from "react";
import PropTypes from "prop-types";

function Input({ value, onChange, placeholder, className, name }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name} 
            className={`border border-gray-400 px-2 py-1 rounded ${className}`}
        />
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string.isRequired, 
};

Input.defaultProps = {
    placeholder: "",
    className: "",
};

export default Input;