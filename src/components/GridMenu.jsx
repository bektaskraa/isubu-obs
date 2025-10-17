import React from "react";
import { NavLink } from 'react-router-dom';

// Stylesheet
import './GridMenu.css';

// Icons
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

// Localization
import { useTranslation } from "react-i18next";

function GridMenu() {
    const { t, i18n } = useTranslation();
    return (
           <div className={'row'}>
               <div className={'col-12'}>
                   <div className={""}>
                       <div className={'col-12'}>
                           <div className={'row'}>
                               <div className={'col-12 col-lg-9'}>
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
                                               placeholder={t("Search")+"..."}
                                           />
                                       </div>
                                   </form>
                               </div>
                               <div className={'col-12 col-lg-2'}>
                                   <div className="dropdown">
                                       <button style={{backgroundColor:"#f6f6f6",color:"black"}}
                                           className="btn btn-secondary dropdown-toggle"
                                           type="button"
                                           id="languageDropdown"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false"
                                       >
                                           {i18n.language}
                                       </button>
                                       <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                           <li>
                                               <button className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>
                                                   English
                                               </button>
                                           </li>
                                           <li>
                                               <button className="dropdown-item" onClick={() => i18n.changeLanguage("tr")}>
                                                   Türkçe
                                               </button>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className={'col-12'}>
                           <div id={'gno'} className="dashboard-card gno-card">
                               <span style={{ whiteSpace: 'pre-line' }}>
                                   {t("General Grade Average")}
                               </span>
                               <h2 id={'gno-value'} >3.4</h2>
                           </div>
                       </div>
                       <div className={'col-12'}>
                           <div className={'row'}>
                               <div className={'col-6'}>
                                   <div id={'timetable'} className="action-card">
                                       <FontAwesomeIcon icon={faCalendar} className="fa-icon" />
                                       <span>{t("Timetable")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'homework'} className="action-card">
                                       <FontAwesomeIcon icon={faFileLines} className="fa-icon" />
                                       <span>{t("Homework")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div  id={'announcements'} className="action-card">
                                       <FontAwesomeIcon icon={faBullhorn} className="fa-icon" />
                                       <span>{t("Announcements")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'email'} className="action-card">
                                       <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                                       <span>{t("Email")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'liveLesson'} className="action-card">
                                       <FontAwesomeIcon icon={faVideo} className="fa-icon" />
                                       <span>{t("LiveLesson")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'absences'} className="action-card">
                                       <FontAwesomeIcon icon={faCalendarXmark} className="fa-icon" />
                                       <span>{t("Absences")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'cafeteria'}  className="action-card">
                                       <FontAwesomeIcon icon={faUtensils} className="fa-icon" />
                                       <span>{t("Cafeteria")}</span>
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