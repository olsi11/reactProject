import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import BuyPage from "./components/card/shared/BuyPage";
import Search from "./components/card/shared/Search/Search"; 
import StudentTable from "./components/StudentTable";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <div className="text-center mb-8">
                            <h1 className="text-5xl font-extrabold mb-4">
                                Student Management System
                            </h1>
                            <p className="text-lg font-light">
                                Manage your students efficiently and effectively.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                            <StudentTable />
                        </div>
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