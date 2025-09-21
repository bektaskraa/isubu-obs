import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFileAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './UpcomingEvents.css'; // Stil dosyasını ekliyoruz

function UpcomingEvents() {
    return (
        <div className="upcoming-events-card">
            <h2>Yaklaşan Etkinlikler</h2>
            <div className="event-list">
                {/* Her bir etkinlik için bir item */}
                <div className="event-item">
                    <div className="event-details">
                        <FontAwesomeIcon icon={faFileAlt} className="event-icon" />
                        <div className="event-info">
                            <span className="event-title">Proje Ödevi Teslimi - Yapay Zeka</span>
                            <span className="event-date">15 Ekim Salı</span>
                        </div>
                    </div>
                    <span className="event-countdown">2 Gün Kaldı</span>
                </div>

                <div className="event-item">
                    <div className="event-details">
                        <FontAwesomeIcon icon={faCalendar} className="event-icon" />
                        <div className="event-info">
                            <span className="event-title">Vize Sınavı - Algoritma</span>
                            <span className="event-date">20 Ekim Pazar</span>
                        </div>
                    </div>
                    <span className="event-countdown">7 Gün Kaldı</span>
                </div>

                <div className="event-item">
                    <div className="event-details">
                        <FontAwesomeIcon icon={faClock} className="event-icon" />
                        <div className="event-info">
                            <span className="event-title">Web Programlama Dersi</span>
                            <span className="event-date">21 Ekim Pazartesi, 14:00</span>
                        </div>
                    </div>
                    <span className="event-countdown">Yarın</span>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;