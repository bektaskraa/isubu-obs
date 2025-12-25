import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsers, faArrowRight, faHashtag } from "@fortawesome/free-solid-svg-icons";

const CLUBS_DATA = [
    {
        id: 1,
        title: "Bilişim Kulübü",
        description: "Yenilikçi projeler geliştirir, teknolojiyi keşfeder, kod yazar ve geleceği şekillendiririz.",
        category: "Computer"
    },
    {
        id: 2,
        title: "Yapay Zekâ Kulübü",
        description: "Veriden zekâ üretiriz. Öğrenen algoritmalarla sınırları kaldırıyoruz!",
        category: "Engineering"
    },
    {
        id: 3,
        title: "Robotik Kulübü",
        description: "Motorlar döner, sensörler konuşur; biz makineleri hayata döndürürüz!",
        category: "Engineering"
    },
    {
        id: 4,
        title: "Girişimcilik Kulübü",
        description: "Fikirleri ürüne, hayalleri işe dönüştüren yaratıcı beyinleriz!",
        category: "Engineering"
    }
];

function Clubs() {
    const { t } = useTranslation();
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Computer", "Engineering", "Sport"];

    const filteredClubs = CLUBS_DATA.filter(club => {
        const matchesQuery = club.title.toLowerCase().includes(query.toLowerCase()) || 
                           club.description.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
        return matchesQuery && matchesCategory;
    });

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="page-header">
                        <h1>{t("Clubs Page")}</h1>
                        <p className="page-description">{t("Clubs Description")}</p>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="search-form-wrapper">
                        <div className="search-input-container">
                            <input
                                type="text"
                                className="modern-search-input"
                                placeholder={t("Search Clubs") + "..."}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="search-icon-wrapper">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </div>
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
                                    {cat === "All" ? t("All") || "Hepsi" : t(cat)}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row">
                {filteredClubs.length === 0 ? (
                    <div className="col-12">
                        <p className="text-muted">{t("No results found") || "Sonuç bulunamadı"}</p>
                    </div>
                ) : (
                    filteredClubs.map(club => (
                        <div key={club.id} className="col-md-6 mb-4">
                            <div className="isubu-card club-card h-100">
                                <div className="club-card-content">
                                    <div className="club-icon-wrapper mb-3">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <div className="club-info">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h4>{club.title}</h4>
                                            <span className="club-category-badge">
                                                <FontAwesomeIcon icon={faHashtag} className="me-1" />
                                                {t(club.category)}
                                            </span>
                                        </div>
                                        <p className="club-description">{club.description}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <button className="btn-action w-100 mt-3">
                                            {t("Club Details")} <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Clubs;