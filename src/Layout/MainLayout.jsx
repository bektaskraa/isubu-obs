import { Routes, Route } from "react-router-dom";

//Navs
import Sidebar from "../components/Sidebar";
import GridMenu from "../components/GridMenu";

//Pages
import Dashboard from "../pages/Home.jsx";
import Lessons from "../pages/Lessons.jsx";
import Exams from "../pages/Exams.jsx";
import Clubs from "../pages/Clubs.jsx";
import Account from "../pages/Account.jsx";

export default function MainLayout() {
    return (
        <div className="container">
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-7">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dersler" element={<Lessons />} />
                        <Route path="/sinavlar" element={<Exams />} />
                        <Route path="/kulupler" element={<Clubs />} />
                        <Route path="/hesap" element={<Account />} />
                    </Routes>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0">
                    <GridMenu />
                </div>
            </div>
        </div>
    );
}
