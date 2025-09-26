import React from "react";
import './GridMenu.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBullhorn, faEnvelope, faVideo } from '@fortawesome/free-solid-svg-icons';

function GridMenu() {
    return (
           <div className={'row'}>
               <div className={'col-12'}>
                   <div className={""}>
                       <div className={'col-12'}>
                           <form>
                               <div className="form-floating mb-3">
                                   <input
                                       type="text"
                                       className="form-control"
                                       id="floatingInput"
                                       placeholder="Adınız"
                                   />
                                   <label htmlFor="floatingInput">Ara...</label>
                               </div>
                           </form>
                       </div>
                       <div className={'col-12'}>
                           <div className="dashboard-card gno-card">
                               <span>Genel<br/> Not<br/> Ortalaması<br/></span>
                               <h2>3.4</h2>
                           </div>
                       </div>
                       <div className={'col-12'}>
                           <div className={'row'}>
                               <div className={'col-6'}>
                                   <div className="action-card">
                                       <FontAwesomeIcon icon={faCalendar} className="fa-icon" />
                                       <span>Ders Prog.</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div className="action-card">
                                       <FontAwesomeIcon icon={faBullhorn} className="fa-icon" />
                                       <span>Duyurular</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div className="action-card">
                                       <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                                       <span>Eposta</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div className="action-card">
                                       <FontAwesomeIcon icon={faVideo} className="fa-icon" />
                                       <span>Canlı Ders</span>
                                   </div>
                               </div>
                           </div>







                       </div>
                   </div>
               </div>
           </div>

    );
}

export default GridMenu;