import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSearch, 
    faClock, 
    faCalendarDay, 
    faUserGraduate, 
    faGraduationCap, 
    faBook,
    faFileAlt,
    faPoll,
    faTasks,
    faLayerGroup,
    faCertificate
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const lessons = [
    {
        title: 'Algoritma ve Programlamaya Giriş',
        code: "BLG-111",
        days: 'Pazartesi, Çarşamba',
        exams: { 'Vize 1': "03.11.2025", 'Vize 2': "11.12.2025", 'Final': "12.01.2026" },
        teacher: 'Prof. Dr. Tuncay Aydoğan',
        akts: 5,
        hour: 4,
        semester: '1. Semester',
        type: 'Compulsory'
    }, {
        title: 'Bilgisayar Mühendisliğine Giriş',
        code: "BLG-113",
        days: 'Perşembe',
        exams: { 'Vize 1': "04.11.2025", 'Final': "12.01.2026" },
        teacher: 'Doç Dr. Serep Ergün',
        akts: 3,
        hour: 2,
        semester: '1. Semester',
        type: 'Compulsory'
    }, {
        title: 'Bilişim Teknolojilerinin Temelleri',
        code: "BLG-115",
        days: 'Salı',
        exams: { 'Vize 1': "04.11.2025", 'Final': "12.01.2026" },
        teacher: 'Doç Dr. Serep Ergün',
        akts: 3,
        hour: 2,
        semester: '1. Semester',
        type: 'Compulsory'
    }, {
        title: 'İngilizce I (Hazırlık Eğitimine Tabi Olmayan Öğrenciler İçin)',
        code: "ING-101",
        days: 'Salı',
        exams: { 'Vize 1': "04.11.2025", 'Final': "12.01.2026" },
        teacher: 'Doç Dr. Serep Ergün',
        akts: 3,
        hour: 2,
        semester: '1. Semester',
        type: 'Compulsory'
    },
];

function Lessons() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        setFiltered(lessons);
    }, []);

    useEffect(() => {
        const delay = setTimeout(() => {
            const lower = query.toLowerCase();
            const filteredLessons = lessons.filter(
                (lesson) =>
                    lesson.title.toLowerCase().includes(lower) ||
                    lesson.code.toLowerCase().includes(lower) ||
                    lesson.teacher.toLowerCase().includes(lower)
            );
            setFiltered(filteredLessons);
        }, 300);

        return () => clearTimeout(delay);
    }, [query]);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col-12">
                    <h1>Dersler</h1>
                    <h5 className={'text-muted'}>Derslerinizi görün, kayıt ve yenileme yapın ve dökümanları inceleyin.</h5><br />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12"}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-lessons-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-lessons" type="button" role="tab" aria-controls="pills-lessons"
                                    aria-selected="true">Dersleriniz
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-upcoming-lessons-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-upcoming-lessons" type="button" role="tab"
                                    aria-controls="pills-upcoming-lessons" aria-selected="false">Gelecek Dersleriniz
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-homeworks-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-homeworks" type="button" role="tab"
                                    aria-controls="pills-homeworks" aria-selected="false">Ödevler
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {/* Lessons */}
                        <div className="tab-pane fade show active" id="pills-lessons" role="tabpanel"
                             aria-labelledby="pills-lessons-tab" tabIndex="0">
                            <div className="row">
                                <div className="col-12">
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
                                                placeholder="Derslerde Ara..."
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="col-12">
                                    <div className="accordion">
                                        {filtered.length === 0 ? (
                                            <p className="text-muted">Sonuç bulunamadı</p>
                                        ) : (
                                            filtered.map((lesson, index) => (
                                                <div key={index} className="accordion-item">
                                                    <h2 className="accordion-header" id={`heading${index}`}>
                                                        <button
                                                            className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                                            type="button"
                                                            onClick={() => toggle(index)}
                                                            aria-expanded={openIndex === index ? "true" : "false"}
                                                            aria-controls={`collapse${index}`}
                                                        >
                                                            <span className="badge bg-main">{lesson.code}</span> &nbsp; {lesson.title}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`collapse${index}`}
                                                        className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                                                        aria-labelledby={`heading${index}`}
                                                        data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <div className="lesson-details-grid">
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faCalendarDay} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Lesson Days")}</small>
                                                                        <span>{lesson.days}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faUserGraduate} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Teacher")}</small>
                                                                        <a href="#">{lesson.teacher}</a>
                                                                    </div>
                                                                </div>
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faGraduationCap} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("AKTS")}</small>
                                                                        <span>{lesson.akts}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faClock} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Weekly Hours")}</small>
                                                                        <span>{lesson.hour} {t("Hours")}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faLayerGroup} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Semester")}</small>
                                                                        <span>{t(lesson.semester)}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faCertificate} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Course Type")}</small>
                                                                        <span>{t(lesson.type)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="lesson-exams-section mt-4">
                                                                <h6><FontAwesomeIcon icon={faBook} className="me-2 text-main" /> {t("Exams")}</h6>
                                                                <div className="exams-flex mt-2">
                                                                    {Object.entries(lesson.exams).map(([examName, date]) => (
                                                                        <div key={examName} className="exam-card">
                                                                            <span className="exam-name">{examName}</span>
                                                                            <span className="exam-date">{date}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="lesson-actions mt-4">
                                                                <button type="button" className="btn btn-action">
                                                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" /> {t("Documents")}
                                                                </button>
                                                                <button type="button" className="btn btn-action">
                                                                    <FontAwesomeIcon icon={faPoll} className="me-2" /> {t("Exam Results")}
                                                                </button>
                                                                <button type="button" className="btn btn-action">
                                                                    <FontAwesomeIcon icon={faTasks} className="me-2" /> {t("Homeworks")}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Next Semester Lessons */}
                        <div className="tab-pane fade" id="pills-upcoming-lessons" role="tabpanel"
                             aria-labelledby="pills-upcoming-lessons-tab" tabIndex="0">
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
                                    <input type="text" className="form-control ps-5" placeholder="Derslerde Ara..." />
                                </div>
                            </form>
                            <h5 className={"text-muted"}>Gelecek Dönem Dersleriniz</h5>
                            <p className="text-muted">Burada görünecek</p>
                        </div>

                        {/* Homeworks */}
                        <div className="tab-pane fade" id="pills-homeworks" role="tabpanel"
                             aria-labelledby="pills-homeworks-tab" tabIndex="0">
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
                                    <input type="text" className="form-control ps-5" placeholder="Ödevlerde Ara..." />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lessons;
