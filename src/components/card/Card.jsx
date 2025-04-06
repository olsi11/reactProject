import React from "react";
import Img from "./Img";
import "./Card.css";
import Title from "./Title";
import Content from "./Content";
import Button from "./Button";

function Card() {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <Img src="https://th.bing.com/th/id/OIP.-PZphiamA0yAMN7p6URDPgHaIu?rs=1&pid=ImgDetMain" alt="Placeholder" />
                    <Title text="Olsi" />
                    <Content text="Amari " />
                    <div className="card-button">
                        <Button text="Buy" />
                        <Button text="Check" />
                    </div>
                </div>
                <div className="card">
                    <Img src="https://th.bing.com/th/id/OIP.-PZphiamA0yAMN7p6URDPgHaIu?rs=1&pid=ImgDetMain" alt="Placeholder" />
                    <Title text="Card Title" />
                    <Content text="This is some content inside the card." />
                    <div className="card-button">
                        <Button text="Buy" />
                        <Button text="Check" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;

