import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faSearch, 
    faCalendarCheck, 
    faClock, 
    faLocationDot, 
    faUserTie, 
    faFileSignature 
} from "@fortawesome/free-solid-svg-icons";

const EXAMS_DATA = [
    {
        id: 1,
        title: "Algoritma ve Programlamaya Giriş",
        code: "BLG-111",
        type: "Midterm",
        date: "03.11.2025",
        time: "10:00",
        location: "Derslik 101",
        lecturer: "Prof. Dr. Tuncay Aydoğan",
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
    {
        id: 2,
        title: "Bilgisayar Mühendisliğine Giriş",
        code: "BLG-113",
        type: "Midterm",
        date: "04.11.2025",
        time: "14:00",
        location: "Derslik 202",
        lecturer: "Doç. Dr. Serap Ergün",
        results: {
            score: 72,
            average: 62.4,
            highest: 100,
            lowest: 15,
            participants: 48,
            nonParticipants: 0,
            questionScores: [
                { question: 1, score: 25, maxScore: 25 },
                { question: 2, score: 20, maxScore: 25 },
                { question: 3, score: 15, maxScore: 25 },
                { question: 4, score: 12, maxScore: 25 }
            ]
        }
    },
    {
        id: 3,
        title: "Bilişim Teknolojilerinin Temelleri",
        code: "BLG-115",
        type: "Final",
        date: "12.01.2026",
        time: "09:00",
        location: "Laboratuvar A",
        lecturer: "Doç. Dr. Serap Ergün",
        results: null
    },
    {
        id: 4,
        title: "İngilizce I",
        code: "ING-101",
        type: "Final",
        date: "15.01.2026",
        time: "13:30",
        location: "Online",
        lecturer: "Öğr. Gör. Ayşe Yılmaz",
        results: null
    }
];

function Exams() {
    const { t } = useTranslation();
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedExam, setSelectedExam] = useState(null);

    const categories = ["All", "Midterm", "Final"];

    const handleOpenModal = (exam) => {
        setSelectedExam(exam);
    };

    const handleCloseModal = () => {
        setSelectedExam(null);
    };

    const filteredExams = EXAMS_DATA.filter(exam => {
        const matchesQuery = 
            exam.title.toLowerCase().includes(query.toLowerCase()) ||
            exam.code.toLowerCase().includes(query.toLowerCase()) ||
            t(exam.type).toLowerCase().includes(query.toLowerCase());
        
        const matchesCategory = selectedCategory === "All" || exam.type === selectedCategory;
        
        return matchesQuery && matchesCategory;
    });

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="page-header">
                        <h1>{t("Exams Page")}</h1>
                        <p className="page-description">{t("Exams Description")}</p>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <form onSubmit={e => e.preventDefault()} className="search-form-wrapper">
                        <div className="search-input-container">
                            <input
                                type="text"
                                className="modern-search-input"
                                placeholder={t("Search Exams") + "..."}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="search-icon-wrapper">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="nav nav-pills category-pills">
                        {categories.map(cat => (
                            <div key={cat} className="nav-item me-2">
                                <button 
                                    className={`nav-link ${selectedCategory === cat ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat === "All" ? t("All") : t(cat)}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row">
                {filteredExams.length === 0 ? (
                    <div className="col-12">
                        <p className="text-muted">{t("No results found")}</p>
                    </div>
                ) : (
                    filteredExams.map(exam => (
                        <div key={exam.id} className="col-md-6 mb-4">
                            <div className="isubu-card h-100 exam-modern-card">
                                <div className="card-top-info d-flex justify-content-between align-items-center mb-3">
                                    <span className="badge bg-main">{exam.code}</span>
                                    <span className="exam-type-badge">{t(exam.type)}</span>
                                </div>
                                <h4 className="exam-title mb-3">{exam.title}</h4>
                                
                                <div className="exam-details-grid-mini">
                                    <div className="mini-detail-item">
                                        <FontAwesomeIcon icon={faCalendarCheck} className="text-main" />
                                        <span>{exam.date}</span>
                                    </div>
                                    <div className="mini-detail-item">
                                        <FontAwesomeIcon icon={faClock} className="text-main" />
                                        <span>{exam.time}</span>
                                    </div>
                                    <div className="mini-detail-item">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-main" />
                                        <span>{exam.location}</span>
                                    </div>
                                    <div className="mini-detail-item">
                                        <FontAwesomeIcon icon={faUserTie} className="text-main" />
                                        <span>{exam.lecturer}</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-top d-flex gap-2">
                                    <button 
                                        className="btn-action flex-grow-1"
                                        onClick={() => handleOpenModal(exam)}
                                    >
                                        <FontAwesomeIcon icon={faFileSignature} className="me-2" />
                                        {t("Exam Details")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Exam Details Modal */}
            {selectedExam && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content-modern" onClick={e => e.stopPropagation()}>
                        <div className="modal-header-modern">
                            <div>
                                <h5 className="mb-0">{selectedExam.title}</h5>
                                <small className="text-muted">{selectedExam.code} - {t(selectedExam.type)}</small>
                            </div>
                            <button className="btn-close-modern" onClick={handleCloseModal}>&times;</button>
                        </div>
                        <div className="modal-body-modern">
                            {selectedExam.results ? (
                                <>
                                    <div className="exam-stats-grid">
                                        <div className="stat-card main-stat">
                                            <small>{t("Your Score")}</small>
                                            <h3>{selectedExam.results.score}</h3>
                                        </div>
                                        <div className="stat-card">
                                            <small>{t("Average")}</small>
                                            <span>{selectedExam.results.average}</span>
                                        </div>
                                        <div className="stat-card">
                                            <small>{t("Highest Grade")}</small>
                                            <span>{selectedExam.results.highest}</span>
                                        </div>
                                        <div className="stat-card">
                                            <small>{t("Lowest Grade")}</small>
                                            <span>{selectedExam.results.lowest}</span>
                                        </div>
                                        <div className="stat-card">
                                            <small>{t("Participants")}</small>
                                            <span>{selectedExam.results.participants}</span>
                                        </div>
                                        <div className="stat-card">
                                            <small>{t("Non-participants")}</small>
                                            <span>{selectedExam.results.nonParticipants}</span>
                                        </div>
                                    </div>

                                    {selectedExam.results.questionScores && (
                                        <div className="question-scores-section mt-4">
                                            <h6 className="section-title mb-3">
                                                <FontAwesomeIcon icon={faFileSignature} className="me-2 text-main" />
                                                {t("Question Based Scores")}
                                            </h6>
                                            <div className="question-grid">
                                                {selectedExam.results.questionScores.map((q, idx) => (
                                                    <div key={idx} className="question-item">
                                                        <div className="question-info">
                                                            <span className="q-number">{t("Question")} {q.question}</span>
                                                            <span className="q-points">{q.score} / {q.maxScore}</span>
                                                        </div>
                                                        <div className="q-progress-bg">
                                                            <div 
                                                                className="q-progress-fill" 
                                                                style={{ width: `${(q.score / q.maxScore) * 100}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-4">
                                    <FontAwesomeIcon icon={faCalendarCheck} className="mb-3 text-muted" style={{fontSize: '3rem'}} />
                                    <p className="text-muted">{t("Exam results not yet announced")}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Exams;