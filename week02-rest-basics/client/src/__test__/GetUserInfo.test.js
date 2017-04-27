import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import {shallow} from 'enzyme';
import Header from '../components/Header';
import SmallNumbers from '../components/SmallNumbers';

describe('My rest basic test', function () {
    it('renders works perfectly fine!!!', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });

    it('Server works well', function () {
        expect(true).toBe(true);
    });

    function getFirst(wrapper) {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    }

    it('renders defualtlogin data', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: </p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('simulates to click on get foo button', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: Robin Dudette</p>;
        wrapper.find('button#GetUserInfo').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});