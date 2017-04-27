import React from 'react';
import GetUserInfo from '../components/GetUserInfo';
import {shallow} from 'enzyme';

describe('My GetUserInfo.test', function () {

   let getFirst = function(wrapper, element) {
        const ninep = wrapper.find(element).first().debug();
        console.log(ninep);
    }


    it('simulates to click on get foo button', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: Robin Dudette</p>;
        wrapper.find('button#GetUserInfo').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});