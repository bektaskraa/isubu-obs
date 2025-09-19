import React from "react";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
    return (
        <div className=" p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faHome} />
                        Ana Sayfa
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">Dersler</a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">Sınavlar</a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">Klüpler</a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">Hesap</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
