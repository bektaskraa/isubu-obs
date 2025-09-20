import Sidebar from "./components/Sidebar";
import GridMenu from "./components/GridMenu";
import { Routes, Route } from 'react-router-dom';


import Dashboard from './pages/Home.jsx';
import Lessons from './pages/Lessons.jsx';
import Exams from './pages/Exams.jsx';
import Clubs from './pages/Clubs.jsx';
import Account from './pages/Account.jsx';

function App() {
    return (
        <div className={'container-fluid'} style={{ padding: '50px' }}>
            <div className={'row'}>
                <div className={'col-2'}>
                    <Sidebar />
                </div>
                <div className={'col-7'}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dersler" element={<Lessons />} />
                        <Route path="/sinavlar" element={<Exams />} />
                        <Route path="/kulupler" element={<Clubs />} />
                        <Route path="/hesap" element={<Account />} />
                    </Routes>
                </div>
                <div className={'col-3'}>
                    <GridMenu />
                </div>
            </div>
        </div>
    );
}

export default App;