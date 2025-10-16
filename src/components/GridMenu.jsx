import React from "react";
import './GridMenu.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faBullhorn,
    faEnvelope,
    faVideo,
    faUtensils,
    faCalendarXmark,
    faFileLines,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

function GridMenu() {
    return (
           <div className={'row'}>
               <div className={'col-12'}>
                   <div className={""}>
                       <div className={'col-12'}>
                           <form onSubmit={e => e.preventDefault()}>
                               <div className="mb-3 position-relative">
                                   <FontAwesomeIcon
                                       icon={faSearch}
                                       className="position-absolute"
                                       style={{
                                           left: '15px',
                                           top: '50%',
                                           transform: 'translateY(-50%)',
                                           color: '#6c757d',
                                           pointerEvents: 'none'
                                       }}
                                   />
                                   <input
                                       type="text"
                                       className="form-control ps-5"
                                       placeholder="Ara..."
                                   />
                               </div>
                           </form>
                       </div>
                       <div className={'col-12'}>
                           <div id={'gno'} className="dashboard-card gno-card">
                               <span>Genel<br/> Not<br/> Ortalaması<br/></span>
                               <h2 id={'gno-value'} >3.4</h2>
                           </div>
                       </div>
                       <div className={'col-12'}>
                           <div className={'row'}>
                               <div className={'col-6'}>
                                   <div id={'timetable'} className="action-card">
                                       <FontAwesomeIcon icon={faCalendar} className="fa-icon" />
                                       <span>Ders Prog.</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'homework'} className="action-card">
                                       <FontAwesomeIcon icon={faFileLines} className="fa-icon" />
                                       <span>Ödevler</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div  id={'announcements'} className="action-card">
                                       <FontAwesomeIcon icon={faBullhorn} className="fa-icon" />
                                       <span>Duyurular</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'email'} className="action-card">
                                       <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                                       <span>Eposta</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'live'} className="action-card">
                                       <FontAwesomeIcon icon={faVideo} className="fa-icon" />
                                       <span>Canlı Ders</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'discontinuity'} className="action-card">
                                       <FontAwesomeIcon icon={faCalendarXmark} className="fa-icon" />
                                       <span>Devamsızlık</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'refectory'}  className="action-card">
                                       <FontAwesomeIcon icon={faUtensils} className="fa-icon" />
                                       <span>Yemekhane</span>
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