import React from 'react';

function Clubs() {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-12">
                    <h1>Kulüpler</h1>
                    <h5>Kulüpleri keşfedin ve katılın</h5><br/>
                </div>
                <div className="col-12">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Adınız"
                            />
                            <label htmlFor="floatingInput">Klüplerde Ara...</label>
                        </div>
                    </form>
                </div>
                <div className="col-12">
                    <input type="checkbox" className="btn-check" id="btn-check-4" autoComplete="off"/>
                    <label className="btn" htmlFor="btn-check-4">Bilgisayar</label>

                    <input type="checkbox" className="btn-check" id="btn-check-5"  autoComplete="off"/>
                    <label className="btn" htmlFor="btn-check-5">Mühendislik</label>

                    <input type="checkbox" className="btn-check" id="btn-check-6"  autoComplete="off"/>
                    <label className="btn" htmlFor="btn-check-6">Spor</label>
                </div>
                <br/><br/>
                <div className="col-12">
                    <div className="row">
                        <div className={'col-6'}>
                            <div className={'isubu-card'}>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <h4>Bilişim Kulübü</h4>
                                    </div>
                                    <div className={'col-12'}>
                                        <p>Yenilikçi projeler geliştirir, teknolojiyi keşfeder, kod yazar ve geleceği şekillendiririz.</p>
                                    </div>
                                    <div className={'col-12'}>
                                        <button className={"isubu-button"} style={{width:"100%"}} >Kulüp Detayları</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'isubu-card'}>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <h4>Yapay Zekâ Kulübü</h4>
                                    </div>
                                    <div className={'col-12'}>
                                        <p>Veriden zekâ üretiriz. Öğrenen algoritmalarla sınırları kaldırıyoruz!</p>
                                    </div>
                                    <div className={'col-12'}>
                                        <button className={"isubu-button"} style={{width:"100%"}} >Kulüp Detayları</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'isubu-card'}>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <h4>Robotik Kulübü</h4>
                                    </div>
                                    <div className={'col-12'}>
                                        <p>Motorlar döner, sensörler konuşur; biz makineleri hayata döndürürüz!</p>
                                    </div>
                                    <div className={'col-12'}>
                                        <button className={"isubu-button"} style={{width:"100%"}} >Kulüp Detayları</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'isubu-card'}>
                                <div className={'row'}>
                                    <div className={'col-12'}>
                                        <h4>Girişimcilik Kulübü</h4>
                                    </div>
                                    <div className={'col-12'}>
                                        <p>Fikirleri ürüne, hayalleri işe dönüştüren yaratıcı beyinleriz!</p>
                                    </div>
                                    <div className={'col-12'}>
                                        <button className={"isubu-button"} style={{width:"100%"}} >Kulüp Detayları</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clubs;