import React from 'react';
import { useTranslation } from "react-i18next";

// Images
import profileImage from '../assets/profile.jpg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

//Companents
import Announcement from '../components/Announcements/Announcements.jsx';

function Home() {
    const { t } = useTranslation();
    return (
        <div className={"container"}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'isubu-card'}>
                            <div className={'row'}>
                                <div className={'col-4 d-flex'}>
                                    <img className={'profile-picture'} src={profileImage}/>
                                </div>
                                <div className={'col-8 user-info-column'}>
                                    <div className="user-info-header">
                                        <h3>Bektaş Kara</h3>
                                        <h5 className={"text-muted"}>
                                            {t("Computer Engineering")}
                                        </h5>
                                    </div>
                                    <div className={'user-info-grid'}>
                                        <div className={'info-item'}>
                                            <FontAwesomeIcon icon={faUser} className="info-icon" />
                                            <div className="info-content">
                                                <small className="info-label">{t("Student Number")}</small>
                                                <span className="info-text">24952875461</span>
                                            </div>
                                        </div>
                                        <div className={'info-item'}>
                                            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                                            <div className="info-content">
                                                <small className="info-label">{t("Email")}</small>
                                                <span className="info-text">l24952875461@isparta.edu.tr</span>
                                            </div>
                                        </div>
                                        <div className={'info-item'}>
                                            <FontAwesomeIcon icon={faChalkboardUser} className="info-icon" />
                                            <div className="info-content">
                                                <small className="info-label">{t("Advisor")}</small>
                                                <a href={'#'} className="info-text advisor-link">Doç. Dr. Serap Ergün</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={'col-12'}>
                    <Announcement />
                </div>
            </div>
        </div>

    );
}

export default Home;