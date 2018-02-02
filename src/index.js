import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/Main/MainPage';
//import registerServiceWorker from './registerServiceWorker';
import unregister from './registerServiceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));
//registerServiceWorker();
unregister();
