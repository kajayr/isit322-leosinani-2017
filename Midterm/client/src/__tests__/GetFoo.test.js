import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from '../components/GetFoo';
import {shallow} from 'enzyme';

describe('My Foo test', function() {
    var quiet = false;

    it('renders button click message foo', () => {
        const wrapper = shallow(<GetFoo />);
        const nineSign = <p className='App-intro'>state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
