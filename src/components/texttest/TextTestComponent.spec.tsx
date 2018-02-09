import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TextTestComponent from './TextTestComponent';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextTestComponent />, div);
});
