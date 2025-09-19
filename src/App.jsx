import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className={'container-fluid'} style={{ padding: '50px' }}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <Sidebar />
                </div>
                <div className={'col-4'}>
                    page source
                </div>
                <div className={'col-4'}>
                    grid menu
                </div>
            </div>
        </div>
    );
}

export default App;
