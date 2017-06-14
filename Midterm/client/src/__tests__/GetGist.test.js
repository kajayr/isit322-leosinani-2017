/**
 * Created by bcuser on 5/11/17.
 */
import React from 'react';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);
jest.mock('whatwg-fetch');
import GetGist from '../components/GetGist';
import gistData from '../gist-data';
import {mount} from 'enzyme';
import ElfLogger from '../elf-logger';
const logger = new ElfLogger('get-gist', 'blue', 'yellow', '24px');

describe('My GetUserInfo test', function() {

    it('renders default url', () => {
        const wrapper = mount(<GetGist gitGist={gistData}
                                       fetchGist={this.getGist} />);
        const inputElement = <p className='App-intro' id='url'>url: url-qux</p>;
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default description', () => {
        const wrapper = mount(<GetGist gitGist={gistData}
                                       fetchGist={this.getGist} />);
        const inputElement = <p className='App-intro' id='description'>description: description-qux</p>;
        elfDebug.getElement(wrapper, 'p');
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default owner login', () => {
        const wrapper = mount(<GetGist gitGist={gistData}
                                       fetchGist={this.getGist} />);
        const inputElement = <p className='App-intro' id='login'>login: owner login</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

    it('renders default owner url', () => {
        const wrapper = mount(<GetGist gitGist={gistData}
                                       fetchGist={this.getGist} />);
        const inputElement = <p className='App-intro' id='owner url'>owner url: owner url</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });
    it('renders default id', () => {
        const wrapper = mount(<GetGist gitGist={gistData}
                                       fetchGist={this.getGist} />);
        const inputElement = <p className='App-intro' id='id'>id: id-qux</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });
    it('renders default git_pull_url', () => {
        const wrapper = mount(<GetGist gitGist={gistData}
                                       fetchGist={this.getGist} />);
        const inputElement = <p className='App-intro' id='pull-url'>git pull url: pull-url-qux</p>;
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });

});
