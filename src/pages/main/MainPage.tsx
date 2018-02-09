import * as React from 'react';
import TextTestComponent from '../../components/texttest/TextTestComponent';
import './MainPage.css';

const logo = require('./logo.svg');

class MainPage extends React.Component {
    render() {
        return (
            <div className="MainPage">
                <header className="MainPage-header">
                    <img src={logo} className="MainPage-logo" alt="logo" />
                    <h1 className="MainPage-title">Welcome to React</h1>
                </header>
                <div className="MainPage-intro">
                    To get started Javi, edit <code>src/App.js</code> and save to reload.
                    <TextTestComponent />
                </div>
            </div>
        );
    }
}

export default MainPage;
