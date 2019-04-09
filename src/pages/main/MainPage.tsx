import * as React from 'react';
import './MainPage.css';

class MainPage extends React.Component {
    render() {
        return (
            <main>
                <div className="intro">Hello, I'm Javier!</div>
                <div className="tagline">Artificial Intelligence | Cloud | Machine learning</div>
                <div className="icons-social">
                    <a target="_blank" href="https://github.com/jmorenov">
                        <i className="fab fa-github"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/jmorenov28">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a target="_blank" href="https://stackoverflow.com/users/3883741/jmorenov">
                        <i className="fab fa-stack-overflow"/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/jmorenov">
                        <i className="fab fa-linkedin"/>
                    </a>
                    <a target="_blank" href="https://github.com/jmorenov/ResumeCV/blob/master/JavierMoreno_EN.pdf">
                        <i className="fa fa-briefcase"/>
                    </a>
                </div>
            </main>
        );
    }
}

export default MainPage;
