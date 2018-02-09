import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import SecondPage from './pages/second/SecondPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

if (window.location.protocol !== 'https:') {
    window.location.assign('https:' + window.location.href.substring(window.location.protocol.length));
} else {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={MainPage}/>
                <Route path="/second" component={SecondPage}/>
            </Switch>
        </BrowserRouter>,
        document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
}