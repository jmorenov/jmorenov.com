import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import SecondPage from './pages/second/SecondPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Switch>
        <Route exact={true} path="/" component={MainPage}/>
        <Route path="/second" component={SecondPage}/>
    </Switch>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();