import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/Main/MainPage';
import registerServiceWorker from './registerServiceWorker';

if (window.location.protocol !== 'https:') {
    window.location = 'https:' + window.location.href.substring(window.location.protocol.length);
} else {
    ReactDOM.render(<MainPage />, document.getElementById('root'));
    registerServiceWorker();
}