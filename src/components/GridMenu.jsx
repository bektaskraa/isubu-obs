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
    faSearch,
    faGlobe,
    faGraduationCap
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
                               <div className={'col-12 col-lg-8'}>
                                   <form onSubmit={e => e.preventDefault()} className="search-form-wrapper">
                                       <div className="search-input-container">
                                           <input
                                               type="text"
                                               className="modern-search-input"
                                               placeholder={t("Search")+"..."}
                                           />
                                           <div className="search-icon-wrapper">
                                               <FontAwesomeIcon icon={faSearch} />
                                           </div>
                                       </div>
                                   </form>
                               </div>
                               <div className={'col-12 col-lg-4'}>
                                   <div className="language-selector-wrapper">
                                       <div className="dropdown">
                                           <button 
                                               className="language-btn dropdown-toggle" 
                                               type="button" 
                                               id="languageDropdown" 
                                               data-bs-toggle="dropdown" 
                                               aria-expanded="false"
                                           >
                                               <div className="lang-icon-circle">
                                                   <FontAwesomeIcon icon={faGlobe} />
                                               </div>
                                               <span className="lang-text">{i18n.language.toUpperCase()}</span>
                                           </button>
                                           <ul className="dropdown-menu dropdown-menu-end modern-dropdown" aria-labelledby="languageDropdown">
                                               <li>
                                                   <button 
                                                       className={`dropdown-item ${i18n.language === 'tr' ? 'active' : ''}`} 
                                                       onClick={() => i18n.changeLanguage("tr")}
                                                   >
                                                       <span className="lang-flag">🇹🇷</span> Türkçe
                                                   </button>
                                               </li>
                                               <li>
                                                   <button 
                                                       className={`dropdown-item ${i18n.language === 'en' ? 'active' : ''}`} 
                                                       onClick={() => i18n.changeLanguage("en")}
                                                   >
                                                       <span className="lang-flag">🇺🇸</span> English
                                                   </button>
                                               </li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className={'col-12'}>
                           <div id={'gno'} className="dashboard-card gno-card">
                               <div className="gno-content">
                                   <div className="gno-info">
                                       <span className="gno-label">
                                           {t("General Grade Average")}
                                       </span>
                                       <h2 id={'gno-value'} className="gno-number">3.4</h2>
                                   </div>
                                   <div className="gno-icon-wrapper">
                                       <FontAwesomeIcon icon={faGraduationCap} />
                                   </div>
                               </div>
                               <div className="gno-progress-bar">
                                   <div className="gno-progress-fill" style={{ width: '85%' }}></div>
                               </div>
                           </div>
                       </div>
                       <div className={'col-12'}>
                           <div className={'row'}>
                               <div className={'col-6'}>
                                   <div id={'timetable'} className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faCalendar} />
                                       </div>
                                       <span>{t("Timetable")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'homework'} className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faFileLines} />
                                       </div>
                                       <span>{t("Homework")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div  id={'announcements'} className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faBullhorn} />
                                       </div>
                                       <span>{t("Announcements")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'email'} className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faEnvelope} />
                                       </div>
                                       <span>{t("Email")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'liveLesson'} className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faVideo} />
                                       </div>
                                       <span>{t("LiveLesson")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'absences'} className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faCalendarXmark} />
                                       </div>
                                       <span>{t("Absences")}</span>
                                   </div>
                               </div>
                               <div className={'col-6'}>
                                   <div id={'cafeteria'}  className="action-card">
                                       <div className="action-icon-wrapper">
                                           <FontAwesomeIcon icon={faUtensils} />
                                       </div>
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