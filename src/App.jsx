import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TableListProvider } from "./Context/TableListContext";
import Card from "./components/card/Card";
import BuyPage from "./components/card/shared/BuyPage";
import Search from "./components/card/shared/Search/Search"; 
import StudentTable from "./components/StudentTable";

function App() {
    return (
        <TableListProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StudentTable />} />
                    <Route path="/buy/:id" element={<BuyPage />} />
                </Routes>
            </BrowserRouter>
        </TableListProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;