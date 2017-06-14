/**
 * Created by bcuser on 5/12/17.
 */
import React from 'react';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(true);
jest.mock('whatwg-fetch');
import GetBoot from '../components/ElfBootstrap';
import bootData from '../boot-data';
import {mount} from 'enzyme';
import Debug from '../elf-logger';
const logger = new Debug('get-boot', 'blue', 'yellow', '24px');

describe('My GetUserInfo test', function() {

    it('renders default id', () => {
        const wrapper = mount(<GetBoot gitBoot={bootData}
                                       fetchBoot={this.getBoot}/>);
        const inputElement = <p className='App-intro' id='id'>Id: boot-id</p>;
        elfDebug.getFirst(wrapper, 'p');
        //logger.log('hello logger', 'param 2', 'param 3');
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default url', () => {
        const wrapper = mount(<GetBoot gitBoot={bootData}
                                       fetchBoot={this.getBoot}/>);
        const inputElement = <p className='App-intro' id='url'>Url: boot-url</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default name', () => {
        const wrapper = mount(<GetBoot gitBoot={bootData}
                                       fetchBoot={this.getBoot}/>);
        const inputElement = <p className='App-intro' id='name'>Name: name goes here</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default description', () => {
        const wrapper = mount(<GetBoot gitBoot={bootData}
                                       fetchBoot={this.getBoot}/>);
        const inputElement = <p className='App-intro' id='description'>Description: a description will go here</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default description', () => {
        const wrapper = mount(<GetBoot gitBoot={bootData}
                                       fetchBoot={this.getBoot}/>);
        const inputElement = <p className='App-intro' id='network_count'>Network count: network count goes here</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default description', () => {
        const wrapper = mount(<GetBoot gitBoot={bootData}
                                       fetchBoot={this.getBoot}/>);
        const inputElement = <p className='App-intro'
                                id='subscribers_count'>Subscribers count: subscribers count goes here</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

});
