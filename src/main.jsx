import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/user.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserProvider>
    </StrictMode>
);
