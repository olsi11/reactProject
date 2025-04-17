import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardData from "../../../Data/Card_Data/CardData/cardData"; // Import CardData
import Img from "./Img/Img";
import Title from "./Title/Title";
import Content from "./Descriptions/Content";
import Button from "./Button/Button";

function BuyPage() {
    const { id } = useParams(); // Get the card's id from the route
    const navigate = useNavigate(); // Hook to navigate between pages
    const card = CardData.find(card => card.id === Number(id)); // Ensure id is parsed correctly

    if (!card) {
        return <div>Card not found!</div>;
    }

    const handleBack = () => {
        navigate("/card"); // Navigate back to the Card.jsx page
    };

    return (
        <div className="buy-page flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Buy Page</h1>
            <div className="w-[600px] h-[700px] bg-white border-0 shadow-xl rounded-[10px] p-4 flex flex-col items-center justify-center">
                <Img src={card.image} alt={card.title} className="card-image mx-auto w-[400px] h-[300px] object-cover" />
                <Title text={card.title} className="text-2xl font-semibold text-center mt-4" />
                <Content text={card.description} className="text-center mt-2" />
                <Button
                    text="Back"
                    onClick={handleBack}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                />
            </div>
        </div>
    );
}

export default BuyPage;