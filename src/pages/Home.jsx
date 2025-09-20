import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className={"container-fluid"}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <div className={'row'}>
                                <div className={'col-2'}>
                                    <img className={'profile-picture'} src={'../../src/assets/profile.jpg'}/>
                                </div>
                                <div className={'col-10'}>
                                    <h1>Bektaş Kara</h1>
                                    <h5 className={"text-muted"}>Bilgisayar Mühendisliği</h5>
                                    <span className={"text-muted"}>
                                        <FontAwesomeIcon icon={faUser} />
                                        24953875415
                                    </span>
                                    <br/>
                                    <span className={"text-muted"}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        24953875415@isparta.edu.tr
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