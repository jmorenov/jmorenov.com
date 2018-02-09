import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainPage from './pages/main/MainPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <MainPage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
