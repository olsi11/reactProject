import React from "react";
import './Title.css';

function Title({ text }) {
    return (
        <>
            <div className="card-title">
                <h2>{text}</h2>
            </div>
        </>
    );
}

export default Title;