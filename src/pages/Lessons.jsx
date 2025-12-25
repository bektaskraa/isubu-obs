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
    faCalendarXmark,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import ExamDetailsModal from '../modals/ExamDetailsModal';
import AllExamsModal from '../modals/AllExamsModal';
import LessonDocumentsModal from '../modals/LessonDocumentsModal';

const lessons = [
    {
        title: 'Algoritma ve Programlamaya Giriş',
        code: "BLG-111",
        days: 'Pazartesi, Çarşamba',
        exams: { 
            'Vize 1': { 
                date: "03.11.2025", 
                score: 85,
                results: {
                    score: 85,
                    average: 68.5,
                    highest: 95,
                    lowest: 20,
                    participants: 45,
                    nonParticipants: 2,
                    questionScores: [
                        { question: 1, score: 20, maxScore: 20 },
                        { question: 2, score: 15, maxScore: 20 },
                        { question: 3, score: 20, maxScore: 20 },
                        { question: 4, score: 10, maxScore: 20 },
                        { question: 5, score: 20, maxScore: 20 }
                    ]
                }
            }, 
            'Vize 2': { 
                date: "11.12.2025", 
                score: 70,
                results: {
                    score: 70,
                    average: 65.0,
                    highest: 100,
                    lowest: 30,
                    participants: 44,
                    nonParticipants: 3,
                    questionScores: [
                        { question: 1, score: 15, maxScore: 25 },
                        { question: 2, score: 20, maxScore: 25 },
                        { question: 3, score: 25, maxScore: 25 },
                        { question: 4, score: 10, maxScore: 25 }
                    ]
                }
            }, 
            'Final': { 
                date: "12.01.2026", 
                score: 90,
                results: {
                    score: 90,
                    average: 72.4,
                    highest: 100,
                    lowest: 40,
                    participants: 46,
                    nonParticipants: 1,
                    questionScores: [
                        { question: 1, score: 30, maxScore: 30 },
                        { question: 2, score: 30, maxScore: 30 },
                        { question: 3, score: 30, maxScore: 40 }
                    ]
                }
            } 
        },
        teacher: 'Prof. Dr. Tuncay Aydoğan',
        akts: 5,
        hour: 4,
        absences: 2,
        grade: 'AA',
        documents: [
            { id: 1, name: "Ders Sunumu - Hafta 1", type: "pdf", size: "2.4 MB", date: "20.09.2025" },
            { id: 2, name: "Algoritma Örnekleri", type: "zip", size: "15.8 MB", date: "25.09.2025" },
            { id: 3, name: "Ders Kaydı - Döngüler", type: "mp4", size: "120 MB", date: "01.10.2025" }
        ]
    }, {
        title: 'Bilgisayar Mühendisliğine Giriş',
        code: "BLG-113",
        days: 'Perşembe',
        exams: { 
            'Vize 1': { 
                date: "04.11.2025", 
                score: 95,
                results: {
                    score: 95,
                    average: 75.2,
                    highest: 100,
                    lowest: 50,
                    participants: 50,
                    nonParticipants: 0,
                    questionScores: [
                        { question: 1, score: 50, maxScore: 50 },
                        { question: 2, score: 45, maxScore: 50 }
                    ]
                }
            }, 
            'Final': { 
                date: "12.01.2026", 
                score: 80,
                results: {
                    score: 80,
                    average: 68.0,
                    highest: 95,
                    lowest: 35,
                    participants: 49,
                    nonParticipants: 1,
                    questionScores: [
                        { question: 1, score: 40, maxScore: 50 },
                        { question: 2, score: 40, maxScore: 50 }
                    ]
                }
            } 
        },
        teacher: 'Doç Dr. Serep Ergün',
        akts: 3,
        hour: 2,
        absences: 0,
        grade: 'BA',
        documents: [
            { id: 1, name: "Mühendislik Etiği", type: "pdf", size: "1.1 MB", date: "15.09.2025" },
            { id: 2, name: "Tanıtım Videosu", type: "mp4", size: "45 MB", date: "16.09.2025" }
        ]
    }, {
        title: 'Bilişim Teknolojilerinin Temelleri',
        code: "BLG-115",
        days: 'Salı',
        exams: { 
            'Vize 1': { 
                date: "04.11.2025", 
                score: 60,
                results: {
                    score: 60,
                    average: 55.4,
                    highest: 90,
                    lowest: 10,
                    participants: 40,
                    nonParticipants: 5,
                    questionScores: [
                        { question: 1, score: 30, maxScore: 50 },
                        { question: 2, score: 30, maxScore: 50 }
                    ]
                }
            }, 
            'Final': { 
                date: "12.01.2026", 
                score: 75,
                results: {
                    score: 75,
                    average: 60.2,
                    highest: 95,
                    lowest: 25,
                    participants: 42,
                    nonParticipants: 3,
                    questionScores: [
                        { question: 1, score: 35, maxScore: 50 },
                        { question: 2, score: 40, maxScore: 50 }
                    ]
                }
            } 
        },
        teacher: 'Doç Dr. Serep Ergün',
        akts: 3,
        hour: 2,
        absences: 4,
        grade: 'CB',
        documents: [
            { id: 1, name: "Donanım Temelleri", type: "pdf", size: "3.2 MB", date: "10.09.2025" },
            { id: 2, name: "Ses Kaydı - Donanım", type: "mp3", size: "12 MB", date: "11.09.2025" }
        ]
    }, {
        title: 'İngilizce I (Hazırlık Eğitimine Tabi Olmayan Öğrenciler İçin)',
        code: "ING-101",
        days: 'Salı',
        exams: { 
            'Vize 1': { 
                date: "04.11.2025", 
                score: 100,
                results: {
                    score: 100,
                    average: 82.1,
                    highest: 100,
                    lowest: 40,
                    participants: 55,
                    nonParticipants: 0,
                    questionScores: [
                        { question: 1, score: 50, maxScore: 50 },
                        { question: 2, score: 50, maxScore: 50 }
                    ]
                }
            }, 
            'Final': { 
                date: "12.01.2026", 
                score: 95,
                results: {
                    score: 95,
                    average: 85.4,
                    highest: 100,
                    lowest: 45,
                    participants: 54,
                    nonParticipants: 1,
                    questionScores: [
                        { question: 1, score: 45, maxScore: 50 },
                        { question: 2, score: 50, maxScore: 50 }
                    ]
                }
            } 
        },
        teacher: 'Doç Dr. Serep Ergün',
        akts: 3,
        hour: 2,
        absences: 0,
        grade: 'AA',
        documents: [
            { id: 1, name: "Grammar Rules", type: "pdf", size: "0.8 MB", date: "05.09.2025" },
            { id: 2, name: "Listening Exercise", type: "mp3", size: "8 MB", date: "06.09.2025" }
        ]
    },
];

function Lessons() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [selectedExam, setSelectedExam] = useState(null);
    const [selectedLessonForExams, setSelectedLessonForExams] = useState(null);
    const [selectedLessonForDocuments, setSelectedLessonForDocuments] = useState(null);

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

    const handleOpenResults = (lesson) => {
        setSelectedLessonForExams(lesson);
    };

    const handleOpenDocuments = (lesson) => {
        setSelectedLessonForDocuments(lesson);
    };

    const handleOpenSingleExam = (examData) => {
        setSelectedExam(examData);
    };

    return (
        <div className={"container"}>
            <div className={"row mb-4"}>
                <div className="col-12">
                    <div className="page-header">
                        <h1>{t("Lessons Page")}</h1>
                        <p className="page-description">{t("Lessons Description")}</p>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12"}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-lessons-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-lessons" type="button" role="tab" aria-controls="pills-lessons"
                                    aria-selected="true">{t("Lessons Page")}
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-upcoming-lessons-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-upcoming-lessons" type="button" role="tab"
                                    aria-controls="pills-upcoming-lessons" aria-selected="false">{t("Upcoming Lessons")}
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-homeworks-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-homeworks" type="button" role="tab"
                                    aria-controls="pills-homeworks" aria-selected="false">{t("Homeworks")}
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {/* Lessons */}
                        <div className="tab-pane fade show active" id="pills-lessons" role="tabpanel"
                             aria-labelledby="pills-lessons-tab" tabIndex="0">
                            <div className="row">
                                <div className="col-12">
                                    <form onSubmit={e => e.preventDefault()} className="search-form-wrapper mb-4">
                                        <div className="search-input-container">
                                            <input
                                                type="text"
                                                className="modern-search-input"
                                                placeholder={t("Search Lessons") + "..."}
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                            />
                                            <div className="search-icon-wrapper">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </div>
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
                                                                        <FontAwesomeIcon icon={faCalendarXmark} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Absences")}</small>
                                                                        <span>{lesson.absences} {t("Hours")}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="lesson-detail-item">
                                                                    <div className="detail-icon">
                                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                                    </div>
                                                                    <div className="detail-info">
                                                                        <small>{t("Lesson Grade")}</small>
                                                                        <span>{lesson.grade}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="lesson-exams-section mt-4">
                                                                <h6><FontAwesomeIcon icon={faBook} className="me-2 text-main" /> {t("Exams")}</h6>
                                                                <div className="exams-flex mt-2">
                                                                    {Object.entries(lesson.exams).map(([examName, details]) => (
                                                                        <div 
                                                                            key={examName} 
                                                                            className="exam-card"
                                                                            style={{ cursor: 'pointer' }}
                                                                            onClick={() => handleOpenSingleExam({
                                                                                title: lesson.title,
                                                                                code: lesson.code,
                                                                                type: examName,
                                                                                results: details.results
                                                                            })}
                                                                        >
                                                                            <div className="d-flex justify-content-between align-items-start mb-1">
                                                                                <span className="exam-name">{t(examName)}</span>
                                                                                <span className="exam-score">{details.score}</span>
                                                                            </div>
                                                                            <span className="exam-date">{details.date}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="lesson-actions mt-4">
                                                                <button type="button" className="btn btn-action" onClick={() => handleOpenDocuments(lesson)}>
                                                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" /> {t("Documents")}
                                                                </button>
                                                                <button type="button" className="btn btn-action" onClick={() => handleOpenResults(lesson)}>
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
                            <form onSubmit={e => e.preventDefault()} className="search-form-wrapper mb-4">
                                <div className="search-input-container">
                                    <input
                                        type="text"
                                        className="modern-search-input"
                                        placeholder={t("Search Lessons") + "..."}
                                    />
                                    <div className="search-icon-wrapper">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                            </form>
                            <h5 className={"text-muted"}>{t("Upcoming Lessons")}</h5>
                            <p className="text-muted">Burada görünecek</p>
                        </div>

                        {/* Homeworks */}
                        <div className="tab-pane fade" id="pills-homeworks" role="tabpanel"
                             aria-labelledby="pills-homeworks-tab" tabIndex="0">
                            <form onSubmit={e => e.preventDefault()} className="search-form-wrapper mb-4">
                                <div className="search-input-container">
                                    <input
                                        type="text"
                                        className="modern-search-input"
                                        placeholder={t("Search Homeworks") + "..."}
                                    />
                                    <div className="search-icon-wrapper">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Exam Details Modal */}
            <ExamDetailsModal exam={selectedExam} onClose={() => setSelectedExam(null)} />

            {/* Lesson Documents Modal */}
            <LessonDocumentsModal 
                lesson={selectedLessonForDocuments} 
                onClose={() => setSelectedLessonForDocuments(null)} 
            />

            {/* All Exams Modal */}
            <AllExamsModal 
                lesson={selectedLessonForExams} 
                onClose={() => setSelectedLessonForExams(null)}
                onSelectExam={(examData) => {
                    setSelectedLessonForExams(null);
                    setSelectedExam(examData);
                }}
            />
        </div>
    );
}

export default Lessons;
