import React from "react";

// Stylesheet
import "./Announcements.css";

// Localization
import { useTranslation } from "react-i18next";

function Announcements() {
    const { t } = useTranslation();
    const announcements = [
        {
            "id": 1,
            "title": "Sistem Bakım Çalışması",
            "content": "OBS'de 25 Kasım saat 00:00-06:00 arası bakım yapılacaktır. Bu saatlerde sisteme erişim kesintiye uğrayacaktır. Önemli işlemlerinizi bu saatler dışında tamamlayınız."
        },
        {
            "id": 2,
            "title": "Ders Kayıt Son Günü",
            "content": "Ders kayıtları için son gün bugün (22 Eylül) saat 23:59'dur. Kayıt yapmayan öğrencilerin derse katılım hakkı olmayacaktır."
        },
        {
            "id": 3,
            "title": "Yeni Şifre Politikası",
            "content": "Güvenlik nedeniyle şifre politikası güncellendi. Tüm kullanıcıların OBS şifrelerini acilen yenilemesi gerekmektedir. Şifrenizi hemen değiştirin."
        }
        ]

    return (

        <div className="announcements">
            <div className={"header"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h3>Duyurular</h3>
                    </div>

                    <div className={"col-6 text-end"}>
                        <a href={"#"}>Tümünü gör</a>
                    </div>
                </div>
            </div>
            {announcements.map(announcement => (
                <div id={"announcement-"+announcement.id} className={"item"}>
                    <h5>{announcement.title}</h5>
                    <p>{announcement.content}</p>
                </div>
            ))}

        </div>
    )
}export default Announcements;