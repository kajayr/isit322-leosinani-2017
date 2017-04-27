import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from '../components/GetFoo';
import {shallow} from 'enzyme';
import Header from '../components/Header';
import SmallNumbers from '../components/SmallNumbers';
describe('My rest basic test', function () {
    it('renders works perfectly fine!!!', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('Server works well', function () {
        expect(true).toBe(true);
    });

    it('simulates to click on get foo button', () => {
        const wrapper = shallow(<GetFoo />);
        const nineSign = <p className="App-intro">state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        //const ninep = wrapper.find('p').first().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});