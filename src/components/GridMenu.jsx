import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

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
    faGraduationCap,
    faScroll,
    faFileSignature,
    faBookOpen,
    faCalendarCheck,
    faExclamationCircle,
    faPlusCircle,
    faCalendarAlt,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

// Localization
import { useTranslation } from "react-i18next";

function GridMenu() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    // Sayfa bazlı aksiyon konfigürasyonları
    const getActionsByPath = () => {
        switch (location.pathname) {
            case '/':
                return [
                    { id: 'timetable', icon: faCalendar, label: t("Timetable") },
                    { id: 'homework', icon: faFileLines, label: t("Homework") },
                    { id: 'announcements', icon: faBullhorn, label: t("Announcements") },
                    { id: 'email', icon: faEnvelope, label: t("Email") },
                    { id: 'liveLesson', icon: faVideo, label: t("LiveLesson") },
                    { id: 'absences', icon: faCalendarXmark, label: t("Absences") },
                    { id: 'cafeteria', icon: faUtensils, label: t("Cafeteria") }
                ];
            case '/dersler':
                return [
                    { id: 'homework', icon: faFileLines, label: t("Homework") },
                    { id: 'transcript', icon: faScroll, label: t("Transcript") },
                    { id: 'registration', icon: faFileSignature, label: t("Course Registration") },
                    { id: 'syllabus', icon: faBookOpen, label: t("Syllabus") },
                    { id: 'timetable', icon: faCalendar, label: t("Timetable") },
                    { id: 'absences', icon: faCalendarXmark, label: t("Absences") }
                ];
            case '/sinavlar':
                return [
                    { id: 'exam-schedule', icon: faCalendarCheck, label: t("Exam Schedule") },
                    { id: 'objection', icon: faExclamationCircle, label: t("Grade Objection") },
                    { id: 'gpa-calculator', icon: faGraduationCap, label: t("GPA Calculator") }
                ];
            case '/kulupler':
                return [
                    { id: 'create-club', icon: faPlusCircle, label: t("Create Club") },
                    { id: 'my-clubs', icon: faFileLines, label: t("My Memberships") },
                    { id: 'club-events', icon: faCalendarAlt, label: t("Event Calendar") },
                    { id: 'club-info', icon: faInfoCircle, label: t("Club Rules") }
                ];
            default:
                return [
                    { id: 'timetable', icon: faCalendar, label: t("Timetable") },
                    { id: 'announcements', icon: faBullhorn, label: t("Announcements") }
                ];
        }
    };

    const actions = getActionsByPath();

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
                               {actions.map(action => (
                                   <div key={action.id} className={'col-6'}>
                                       <div id={action.id} className="action-card">
                                           <div className="action-icon-wrapper">
                                               <FontAwesomeIcon icon={action.icon} />
                                           </div>
                                           <span>{action.label}</span>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>
                   </div>
               </div>
           </div>

    );
}

export default GridMenu;