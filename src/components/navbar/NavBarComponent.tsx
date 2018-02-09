import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavBarComponent.css';

class NavBarComponent extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Main Page</Link>
                <Link to="/second">Second Page</Link>
            </div>
        );
    }
}

export default NavBarComponent;