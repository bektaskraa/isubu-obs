import React from "react";
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUserGraduate,faFileLines,faUsers,faUser,faSignOut } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <ul className="nav sidebar flex-column">
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
                        Klüpler
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <NavLink to="/hesap" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faUser} />
                        Hesap
                    </NavLink>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button" onClick={() => console.log("Oturumu Kapat")}>
                        <FontAwesomeIcon icon={faSignOut} />
                        Oturumu Kapat
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;