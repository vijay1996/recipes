import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';

import App from './components/App';

function AppView () {
    return <App />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppView />);