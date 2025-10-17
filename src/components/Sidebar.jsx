import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// Stylesheet
import "./Sidebar.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUserGraduate,
    faFileLines,
    faUsers,
    faUser,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";

// Localization
import { useTranslation } from "react-i18next";



function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target)
            ) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="sidebar-container">
            <button
                ref={toggleRef}
                className="menu-toggle d-md-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                ☰
            </button>

            <div
                ref={sidebarRef}
                className={`sidebar-wrapper ${sidebarOpen ? "active" : ""}`}
            >
                <ul className="nav flex-column p-3">
                    <li className="nav-item mb-2">
                        <NavLink to="/" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faHome} />
                            {t("Home Page")}
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/dersler" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faUserGraduate} />
                            {t("Lessons Page")}
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/sinavlar" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faFileLines} />
                            {t("Exams Page")}
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/kulupler" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faUsers} />
                            {t("Clubs Page")}
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/hesap" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faUser} />
                            {t("Account Page")}
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <a
                            href="#"
                            className="nav-link nav-button"
                            onClick={() => console.log("Oturumu Kapat")}
                        >
                            <FontAwesomeIcon icon={faSignOut} />
                            {t("Logout")}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
