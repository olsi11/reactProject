import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card/Card";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <Card />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;