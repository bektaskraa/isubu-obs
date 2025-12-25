import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login.jsx";

//Layout
import MainLayout from "./Layout/MainLayout.jsx";

// Locales
import "./i18n";
// Stylesheet
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/giris" element={<Login />} />

            <Route path="/*" element={<MainLayout />} />
        </Routes>
    );
}

export default App;
