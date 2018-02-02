import React, { Component } from 'react';
import logo from '../../logo.svg';
import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <header className="MainPage-header">
          <img src={logo} className="MainPage-logo" alt="logo" />
          <h1 className="MainPage-title">Welcome to React</h1>
        </header>
        <p className="MainPage-intro">
          To get started Javi, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default MainPage;