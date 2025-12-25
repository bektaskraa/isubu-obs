import React from "react";

// Stylesheet
import "./Announcements.css";

// Localization
import { useTranslation } from "react-i18next";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendarAlt, faInfoCircle, faExclamationTriangle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function Announcements() {
    const { t } = useTranslation();
    const announcements = [
        {
            "id": 1,
            "title": "Sistem Bakım Çalışması",
            "content": "OBS'de 25 Kasım saat 00:00-06:00 arası bakım yapılacaktır. Bu saatlerde sisteme erişim kesintiye uğrayacaktır. Önemli işlemlerinizi bu saatler dışında tamamlayınız.",
            "date": "24.11.2025",
            "type": "maintenance",
            "icon": faShieldAlt
        },
        {
            "id": 2,
            "title": "Ders Kayıt Son Günü",
            "content": "Ders kayıtları için son gün bugün (22 Eylül) saat 23:59'dur. Kayıt yapmayan öğrencilerin derse katılım hakkı olmayacaktır.",
            "date": "22.09.2025",
            "type": "deadline",
            "icon": faExclamationTriangle
        },
        {
            "id": 3,
            "title": "Yeni Şifre Politikası",
            "content": "Güvenlik nedeniyle şifre politikası güncellendi. Tüm kullanıcıların OBS şifrelerini acilen yenilemesi gerekmektedir. Şifrenizi hemen değiştirin.",
            "date": "20.09.2025",
            "type": "info",
            "icon": faInfoCircle
        }
    ]

    return (

        <div className="announcements-container">
            <div className="announcements-header d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faBullhorn} className="header-icon me-2" />
                    <h3 className="mb-0">{t("Announcements")}</h3>
                </div>
                <a href={"#"} className="see-all-link">{t("See All")}</a>
            </div>
            <div className="announcements-list">
                {announcements.map(announcement => (
                    <div key={announcement.id} className={`announcement-item ${announcement.type}`}>
                        <div className="announcement-icon-wrapper">
                            <FontAwesomeIcon icon={announcement.icon} className="announcement-icon" />
                        </div>
                        <div className="announcement-content">
                            <div className="announcement-meta">
                                <span className="announcement-date">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                                    {announcement.date}
                                </span>
                                <span className={`announcement-badge ${announcement.type}`}>
                                    {t(announcement.type)}
                                </span>
                            </div>
                            <h5 className="announcement-title">{announcement.title}</h5>
                            <p className="announcement-text">{announcement.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}export default Announcements;