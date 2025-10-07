import React from 'react';
import UpcomingEvents from "../components/UpcomingEvents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope,faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className={"container"}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <div className={'row'}>
                                <div className={'col-4'}>
                                    <img className={'profile-picture'} src={'../../src/assets/profile.jpg'}/>
                                </div>
                                <div className={'col-8'}>
                                    <h3>Bektaş Kara</h3>
                                    <h6 className={"text-muted"}>Bilgisayar Mühendisliği</h6>
                                    <div className={'user-information'}>
                                        <span style={{fontSize:14}} className={"text-muted"}>
                                            <FontAwesomeIcon icon={faUser} />
                                            24953875415
                                        </span>
                                        <br/>
                                        <span style={{fontSize:14}} className={"text-muted"}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            24953875415@isparta.edu.tr
                                        </span>
                                        <br/>
                                        <span style={{fontSize:14}} className={"text-muted"}>
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
        </div>

    );
}

export default Home;