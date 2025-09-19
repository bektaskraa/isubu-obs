import React from "react";
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUserGraduate,faFileLines,faUsers,faUser,faSignOut } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
    return (
        <div className=" p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button active">
                        <FontAwesomeIcon icon={faHome} />
                        Ana Sayfa
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faUserGraduate} />
                        Dersler
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faFileLines} />
                        Sınavlar
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faUsers} />
                        Klüpler
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faUser} />
                        Hesap
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link nav-button">
                        <FontAwesomeIcon icon={faSignOut} />
                        Oturumu Kapat
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
