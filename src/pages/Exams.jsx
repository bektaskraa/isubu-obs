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

import ExamDetailsModal from '../modals/ExamDetailsModal';

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
            <ExamDetailsModal exam={selectedExam} onClose={handleCloseModal} />
        </div>
    );
}

export default Exams;