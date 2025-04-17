import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { CgEnter } from "react-icons/cg";

function Search({ className }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
        const results = CardData.filter((card) =>
            card.title && card.title.toLowerCase().includes(term.toLowerCase())
        );

        if (results.length > 0) {
            setFilteredCards(results);
            setError("");
        } else {
            setFilteredCards([]);
            setError("No cards found.");
        }
    };

    return (
        <div className="p-4 flex flex-col items-center" style={{ gap: "10px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={`w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <FiSearch className="" />
            </div>
            <div className="mt-4 w-full">
                {filteredCards.length > 0 ? (
                    <div className="bg-white rounded-lg shadow-md">
                        {filteredCards.map((card) => (
                            <div
                                key={card.id}
                                className="p-4 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer"
                            >
                                <h2 style={{ display: "flex", gap: "8px", alignItems: "center",  }} className="text-sm font-medium text-gray-800">
                                    {card.image && (
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-100 h-50 object-cover rounded-lg mb-2"
                                            style={{ width: "100px", height: "50px" }}
                                        />
                                    )}
                                    {card.title}
                                </h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    error && (
                        <p className="text-red-500 text-center mt-4">{error}</p>
                    )
                )}
            </div>
        </div>
    );
}

export default Search;
