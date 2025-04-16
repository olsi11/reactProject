import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardData from "../../Data/Card_Data/CardData/cardData";
import Img from "./shared/Img/Img"; 
import "./Card.css";
import Title from "./shared/Title/Title"; 
import Content from "./shared/Descriptions/Content";
import Button from "./shared/Button/Button";
import { FaTimes } from "react-icons/fa";

function Card() {
    const [cards, setCards] = useState(CardData);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    };

    const handleBuy = (id) => {
        navigate(`/buy/${id}`); // Navigate to BuyPage with the card's id
    };

    return (
        <div className="card-container">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <Img src={card.image} alt={card.title} />
                    <Title text={card.title} />
                    <Content text={card.description} />
                    <div className="card-button">
                        <Button text="Buy" onClick={() => handleBuy(card.id)} />
                        <Button text={<FaTimes />} onClick={() => handleDelete(card.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;

