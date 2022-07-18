import React, { useState } from 'react';

import './App.css';
import RoutesPage from './pages/routesPage';
import Alert from "./widgets/alert/alert";

function App() {
    const [hide] = useState(true);
    return (<>
        {hide || <Alert/>}

        <div className={'bg-background min-h-screen min-w-full'}>
            <RoutesPage/>
        </div>
    </>);

}

export default App;
