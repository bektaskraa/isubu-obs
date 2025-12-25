import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCalendarCheck, 
    faFileSignature 
} from "@fortawesome/free-solid-svg-icons";

function ExamDetailsModal({ exam, onClose }) {
    const { t } = useTranslation();

    if (!exam) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-modern" onClick={e => e.stopPropagation()}>
                <div className="modal-header-modern">
                    <div>
                        <h5 className="mb-0">{exam.title}</h5>
                        <small className="text-muted">{exam.code} - {t(exam.type)}</small>
                    </div>
                    <button className="btn-close-modern" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body-modern">
                    {exam.results ? (
                        <>
                            <div className="exam-stats-grid">
                                <div className="stat-card main-stat">
                                    <small>{t("Your Score")}</small>
                                    <h3>{exam.results.score}</h3>
                                </div>
                                <div className="stat-card">
                                    <small>{t("Average")}</small>
                                    <span>{exam.results.average}</span>
                                </div>
                                <div className="stat-card">
                                    <small>{t("Highest Grade")}</small>
                                    <span>{exam.results.highest}</span>
                                </div>
                                <div className="stat-card">
                                    <small>{t("Lowest Grade")}</small>
                                    <span>{exam.results.lowest}</span>
                                </div>
                                <div className="stat-card">
                                    <small>{t("Participants")}</small>
                                    <span>{exam.results.participants}</span>
                                </div>
                                <div className="stat-card">
                                    <small>{t("Non-participants")}</small>
                                    <span>{exam.results.nonParticipants}</span>
                                </div>
                            </div>

                            {exam.results.questionScores && (
                                <div className="question-scores-section mt-4">
                                    <h6 className="section-title mb-3">
                                        <FontAwesomeIcon icon={faFileSignature} className="me-2 text-main" />
                                        {t("Question Based Scores")}
                                    </h6>
                                    <div className="question-grid">
                                        {exam.results.questionScores.map((q, idx) => (
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
    );
}

export default ExamDetailsModal;
