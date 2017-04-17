import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('My rest basic test', function () {
    it('renders works perfectly fine!!!', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('Server works well', function () {
        expect(true).toBe(true);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);

    });

// state 8
    it('renders initial value of pragraph with state.8', () => {
        const wrapper = shallow(<App />);
        const eightSign = <p className="App-intro">state.eight: 0</p>;
        const eightp = wrapper.find('p').last().debug();
        //console.log(eightp);
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('simulates to click on get 8 button', () => {
        const wrapper = shallow(<App />);
        const eightSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        const eightp = wrapper.find('p').last().debug();
        // console.log(eightp);
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    // state 7
    it('renders initial value of pragraph with state.7', () => {
        const wrapper = shallow(<App />);
        const sevenSign = <p className="App-intro">state.seven: 0</p>;
        const sevenp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    it('simulates to click on get 7 button', () => {
        const wrapper = shallow(<App />);
        const sevenSign = <p className="App-intro">state.seven: 7</p>;
        wrapper.find('button.getSeven').simulate('click');
        const sevenp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    // state 6
    it('renders initial value of pragraph with state.6', () => {
        const wrapper = shallow(<App />);
        const sixSign = <p className="App-intro">state.six: 0</p>;
        const sixp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('simulates to click on get 6 button', () => {
        const wrapper = shallow(<App />);
        const sixSign = <p className="App-intro">state.six: 6</p>;
        wrapper.find('button.getSix').simulate('click');
        const sixp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sixSign)).toEqual(true);
    });
// state 9
    it('renders initial value of pragraph with state.9', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('simulates to click on get 9 button', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        const ninep = wrapper.find('p').last().debug();
       // console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('simulates to click on get foo button', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});