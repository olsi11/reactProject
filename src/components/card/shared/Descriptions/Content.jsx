import React from "react";
import './Content.css';

function Content({ text }) {
    return (
        <>
            <div className="card-content">
                <p>{text}</p>
            </div>
        </>
    );
}

export default Content;