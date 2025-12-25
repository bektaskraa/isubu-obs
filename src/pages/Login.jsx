import React from 'react';
import Logo from "../assets/isubuLogo.png";
import EdevletIcon from "../assets/edevletIcon.png";
import "./Login.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faBullhorn, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Announcements from '../components/Announcements/Announcements.jsx';

function Login() {
    const { t } = useTranslation();

    return (
        <div className="login-page-container">
            <div className="login-card-wrapper">
                <div className="row g-0">
                    {/* Sol Panel - Duyurular ve Bilgi */}
                    <div className="col-lg-6 login-left-panel">
                        <div className="login-logo-container">
                            <img className="login-logo-img" src={Logo} alt="ISUBU Logo" />
                        </div>
                        <h1>{t("ISUBU OBS")}</h1>
                        <p>{t("Login Welcome Text")}</p>
                    </div>

                    {/* Sağ Panel - Giriş Formu */}
                    <div className="col-lg-6 login-right-panel">
                        <div className="login-form-header">
                            <h2>{t("Welcome Back")}</h2>
                            <p>{t("Please enter your details")}</p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="modern-form-group">
                                <label htmlFor="studentNo">{t("Student Number")}</label>
                                <div className="input-with-icon">
                                    <input 
                                        type="text" 
                                        id="studentNo"
                                        className="modern-input" 
                                        placeholder={t("Enter your student number")}
                                    />
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>

                            <div className="modern-form-group">
                                <label htmlFor="password">{t("Password")}</label>
                                <div className="input-with-icon">
                                    <input 
                                        type="password" 
                                        id="password"
                                        className="modern-input" 
                                        placeholder={t("Enter your password")}
                                    />
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                            </div>

                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>{t("Remember me")}</span>
                                </label>
                                <a href="#" className="forgot-password">{t("Forgot Password?")}</a>
                            </div>

                            <button className="login-submit-btn" type="submit">
                                {t("Login Now")} <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                            </button>

                            <button className="edevlet-login-btn" type="button">
                                <img src={EdevletIcon} alt="e-Devlet" className="edevlet-icon" />
                                {t("Login with e-Government")}
                            </button>
                        </form>

                        <div className="login-footer">
                            <a href="#">{t("Learn Student Number")}</a>
                            <span className="text-muted">|</span>
                            <a href="#">{t("Support")}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="login-announcements-wrapper">
                <Announcements />
            </div>
        </div>
    );
}

export default Login;