import React from "react";
import "./Img.css";

function Img({ src, alt }) {
    return (
        <>
            <div className="card-img">
                <img src={src} alt={alt} />
            </div>
        </>
    );
}

export default Img;