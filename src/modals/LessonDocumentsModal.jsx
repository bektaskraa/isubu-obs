import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFilePdf, 
    faFileArchive, 
    faFileVideo, 
    faFileAudio, 
    faDownload,
    faClock,
    faHdd,
    faTag
} from "@fortawesome/free-solid-svg-icons";

function LessonDocumentsModal({ lesson, onClose }) {
    const { t } = useTranslation();

    if (!lesson) return null;

    const getFileIcon = (type) => {
        switch (type) {
            case 'pdf': return faFilePdf;
            case 'zip':
            case 'rar': return faFileArchive;
            case 'mp4': return faFileVideo;
            case 'mp3': return faFileAudio;
            default: return faFilePdf;
        }
    };

    const getIconColorClass = (type) => {
        switch (type) {
            case 'pdf': return 'text-danger';
            case 'zip':
            case 'rar': return 'text-warning';
            case 'mp4': return 'text-primary';
            case 'mp3': return 'text-info';
            default: return 'text-secondary';
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-modern" onClick={e => e.stopPropagation()}>
                <div className="modal-header-modern">
                    <div>
                        <h5 className="mb-0">{lesson.title}</h5>
                        <small className="text-muted">{lesson.code} - {t("Documents")}</small>
                    </div>
                    <button className="btn-close-modern" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body-modern">
                    <div className="documents-list">
                        {lesson.documents && lesson.documents.length > 0 ? (
                            lesson.documents.map(doc => (
                                <div key={doc.id} className="document-item-modern">
                                    <div className={`doc-icon-wrapper ${getIconColorClass(doc.type)}`}>
                                        <FontAwesomeIcon icon={getFileIcon(doc.type)} />
                                    </div>
                                    <div className="doc-info-modern">
                                        <h6 className="doc-name">{doc.name}</h6>
                                        <div className="doc-meta-modern">
                                            <span className="doc-type-badge-inline">
                                                <FontAwesomeIcon icon={faTag} className="me-1" /> 
                                                {doc.type.toUpperCase()}
                                            </span>
                                            <span className="ms-3"><FontAwesomeIcon icon={faHdd} className="me-1" /> {doc.size}</span>
                                            <span className="ms-3"><FontAwesomeIcon icon={faClock} className="me-1" /> {doc.date}</span>
                                        </div>
                                    </div>
                                    <button className="btn-download-modern" title={t("Download")}>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-5">
                                <p className="text-muted">{t("No results found")}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonDocumentsModal;
