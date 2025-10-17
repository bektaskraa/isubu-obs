import React from 'react';
import UpcomingEvents from "../components/UpcomingEvents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";


function Home() {
    const { t } = useTranslation();
    return (
        <div className={"container"}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'isubu-card'}>
                            <div className={'row'}>
                                <div className={'col-4'}>
                                    <img className={'profile-picture'} src={'../../src/assets/profile.jpg'}/>
                                </div>
                                <div className={'col-8'}>
                                    <h3>Bektaş Kara</h3>
                                    <h5 className={"text-muted"}>
                                        {t("Computer Engineering")}
                                    </h5>
                                    <div className={'user-information'}>
                                        <span className={"text-muted"}>
                                            <FontAwesomeIcon icon={faUser} />
                                            <a>24952875461</a>
                                        </span>
                                        <br/>
                                        <span  className={"text-muted"}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <a>l24952875461@isparta.edu.tr</a>
                                        </span>
                                        <br/>
                                        <span className={"text-muted"}>
                                            <FontAwesomeIcon icon={faChalkboardUser} />
                                            <a href={'#'}>Doç. Dr. Serap Ergün</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;