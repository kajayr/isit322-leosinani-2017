import React from 'react';
import GetFoo from '../components/GetFoo';
import {shallow} from 'enzyme';

describe('My GetFoo.test', function () {

    let getFirst = function(wrapper, element) {
        const ninep = wrapper.find(element).first().debug();
        console.log(ninep);
    }
    it('Server works well', function () {
        expect(true).toBe(true);
    });

    it('simulates to click on get foo button', () => {
        const wrapper = shallow(<GetFoo />);
        const nineSign = <p className="App-intro">state.foo: waiting for express server</p>;
        wrapper.find('button.getFoo').simulate('click');
        getFirst(wrapper, 'p');
        //const ninep = wrapper.find('p').first().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});