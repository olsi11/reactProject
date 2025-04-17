import React from "react";
import './Button.css';

function Button({ onClick, text, disabled }) {
    return (
        <button
            className={`button ${disabled ? "button-disabled" : "button-active"}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;