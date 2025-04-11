import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import BuyPage from "./components/card/shared/BuyPage";
import Search from "./components/card/shared/Search/Search"; 
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                Welcome to My App
                            </h1>
                        </div>
                        <Search className="w-full max-w-md mb-4" />
                        <Card className="w-full max-w-md" />
                    </div>
                } />
                <Route path="/buy/:id" element={<BuyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;