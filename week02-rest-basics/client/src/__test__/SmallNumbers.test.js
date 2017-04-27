import React from 'react';
import {shallow} from 'enzyme';
import SmallNumbers from '../components/SmallNumbers';
import numbersInit from '../components/numbers-data';

describe('My SmallNumbers.test', function () {
    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };
// state 9
    it('renders initial value of pragraph with state.9', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        const ninep = wrapper.find('p').last().debug();
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('simulates to click on get 9 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

// state 8
    it('renders initial value of pragraph with state.8', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const eightSign = <p className="App-intro">state.eight: 0</p>;
        getFirst(wrapper);
        const eightp = wrapper.find('p').last().debug();
        //console.log(eightp);
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('simulates to click on get 8 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const eightSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        const eightp = wrapper.find('p').last().debug();
        // console.log(eightp);
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    // state 7
    it('renders initial value of pragraph with state.7', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sevenSign = <p className="App-intro">state.seven: 0</p>;
        const sevenp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    it('simulates to click on get 7 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sevenSign = <p className="App-intro">state.seven: 7</p>;
        wrapper.find('button.getSeven').simulate('click');
        const sevenp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    // state 6
    it('renders initial value of pragraph with state.6', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sixSign = <p className="App-intro">state.six: 0</p>;
        const sixp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('simulates to click on get 6 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sixSign = <p className="App-intro">state.six: 6</p>;
        wrapper.find('button.getSix').simulate('click');
        const sixp = wrapper.find('p').last().debug();
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    // state 5
    it('renders initial value of pragraph with state.5', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fiveSign = <p className="App-intro">state.five: 0</p>;
        const fivep = wrapper.find('p').last().debug();
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });

    it('simulates to click on get 5 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fiveSign = <p className="App-intro">state.five: 5</p>;
        wrapper.find('button.getFive').simulate('click');
        const fivep = wrapper.find('p').last().debug();
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });
    // state 4
    it('renders initial value of pragraph with state.4', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fourSign = <p className="App-intro">state.four: 0</p>;
        const fourp = wrapper.find('p').last().debug();
        expect(wrapper.contains(fourSign)).toEqual(true);
    });
    it('simulates to click on get 4 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fourSign = <p className="App-intro">state.four: 4</p>;
        wrapper.find('button.getFour').simulate('click');
        const fourp = wrapper.find('p').last().debug();
        expect(wrapper.contains(fourSign)).toEqual(true);
    });
    // state 3
    it('renders initial value of pragraph with state.3', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const threeSign = <p className="App-intro">state.three: 0</p>;
        const threep = wrapper.find('p').last().debug();
        expect(wrapper.contains(threeSign)).toEqual(true);
    });
    it('simulates to click on get 3 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const threeSign = <p className="App-intro">state.three: 3</p>;
        wrapper.find('button.getThree').simulate('click');
        const threep = wrapper.find('p').last().debug();
        expect(wrapper.contains(threeSign)).toEqual(true);
    });
    // state 2
    it('renders initial value of pragraph with state.2', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const twoSign = <p className="App-intro">state.two: 0</p>;
        const twop = wrapper.find('p').last().debug();
        expect(wrapper.contains(twoSign)).toEqual(true);
    });
    it('simulates to click on get 2 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const twoSign = <p className="App-intro">state.two: 2</p>;
        wrapper.find('button.getTwo').simulate('click');
        const twop = wrapper.find('p').last().debug();
        expect(wrapper.contains(twoSign)).toEqual(true);
    });

    // state 1
    it('renders initial value of pragraph with state.1', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const oneSign = <p className="App-intro">state.one: 0</p>;
        const onep = wrapper.find('p').last().debug();
        expect(wrapper.contains(oneSign)).toEqual(true);
    });
    it('simulates to click on get 1 button', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const oneSign = <p className="App-intro">state.one: 1</p>;
        wrapper.find('button.getOne').simulate('click');
        const onep = wrapper.find('p').last().debug();
        expect(wrapper.contains(oneSign)).toEqual(true);
    });

});