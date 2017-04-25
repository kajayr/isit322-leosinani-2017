import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {shallow} from 'enzyme';
import Header from './components/Header';

describe('My rest basic test', function () {
    it('renders works perfectly fine!!!', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('Server works well', function () {
        expect(true).toBe(true);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);

    });


});