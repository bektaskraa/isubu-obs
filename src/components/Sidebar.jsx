import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
    faHome,
    faUserGraduate,
    faFileLines,
    faUsers,
    faUser,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleRef = useRef(null);

    // dışına tıklayınca kapan
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
                            Ana Sayfa
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/dersler" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faUserGraduate} />
                            Dersler
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/sinavlar" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faFileLines} />
                            Sınavlar
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/kulupler" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faUsers} />
                            Kulüpler
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/hesap" className="nav-link nav-button">
                            <FontAwesomeIcon icon={faUser} />
                            Hesap
                        </NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <a
                            href="#"
                            className="nav-link nav-button"
                            onClick={() => console.log("Oturumu Kapat")}
                        >
                            <FontAwesomeIcon icon={faSignOut} />
                            Oturumu Kapat
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
