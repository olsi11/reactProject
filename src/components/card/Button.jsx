import React from "react";
import './Button.css';

function Button({onClick, text}) {
    return (
        <>
            <div className="card-button">
                <button className="button" onClick={onClick}>{text}</button>
            </div>
        </>
    );
}

export default Button;