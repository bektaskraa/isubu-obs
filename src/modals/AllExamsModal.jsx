import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFileAlt, 
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function AllExamsModal({ lesson, onClose, onSelectExam }) {
    const { t } = useTranslation();

    if (!lesson) return null;

    const exams = lesson.exams || {};
    const examEntries = Object.entries(exams);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-modern" onClick={e => e.stopPropagation()}>
                <div className="modal-header-modern">
                    <div>
                        <h5 className="mb-0">{lesson.title}</h5>
                        <small className="text-muted">{lesson.code} - {t("Exams")}</small>
                    </div>
                    <button className="btn-close-modern" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body-modern">
                    <div className="all-exams-list">
                        {examEntries.length === 0 ? (
                            <p className="text-muted text-center py-4">{t("No results found")}</p>
                        ) : (
                            examEntries.map(([type, data]) => (
                                <div 
                                    key={type} 
                                    className="all-exams-item"
                                    onClick={() => onSelectExam({
                                        title: lesson.title,
                                        code: lesson.code,
                                        type: type,
                                        results: data.results
                                    })}
                                >
                                    <div className="exam-item-icon">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                    </div>
                                    <div className="exam-item-info">
                                        <div className="exam-item-top">
                                            <span className="exam-item-type">{t(type)}</span>
                                            {data.score !== undefined && (
                                                <span className="exam-item-score">{data.score}</span>
                                            )}
                                        </div>
                                        <div className="exam-item-bottom">
                                            <span className="exam-item-date">{data.date}</span>
                                        </div>
                                    </div>
                                    <div className="exam-item-action">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllExamsModal;
