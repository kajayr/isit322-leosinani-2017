import React from 'react';
import ReactDOM from 'react-dom';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);
jest.mock('whatwg-fetch');
import GetUserInfo from '../components/GetUserInfo';
import DataMaven from '../components/DataMaven';
import {mount} from 'enzyme';

describe('My GetUserInfo test', function() {

    function getDefault(id, value) {
        it('renders default ' + id, () => {
            const wrapper = mount(<DataMaven />);
            const inputElement = <p className='ElfFormParagraph' id={id}>{value}</p>;
            elfDebug.getIndex(wrapper, 1, true);
            expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
        });

    }

    function getClick(id, value) {
        it('renders button click message for ' + id, () => {
            const wrapper = mount(<DataMaven />);
            const inputElement = <p className='ElfFormParagraph' id={id}>{value}</p>;
            wrapper.find('button.getUser').simulate('click');
            //elfDebug.getFirst(wrapper, 'p');
            // elfDebug.getIndex(wrapper, 7);
            expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
        });
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });

    getDefault('login', 'login-unknown');

    getClick('login', 'kajayr');

    getDefault('id', 'id-unknown');

    getClick('id', '17889728');

    getDefault('avatar_url', 'avatar_url-unknown');

    getClick('avatar_url', 'https://avatars0.githubusercontent.com/u/17889728?v=3');

    getDefault('gravatar_id', 'gravatar_id-unknown');

    getClick('gravatar_id', '');

    getDefault('url', 'url-unknown');

    getClick('url', 'https://api.github.com/users/kajayr');

    getDefault('html_url', 'html_url-unknown');

    getClick('html_url', 'https://github.com/kajayr');

    getDefault('followers_url', 'followers_url-unknown');

    getClick('followers_url', 'https://api.github.com/users/kajayr/followers');

    getDefault('following_url', 'following_url-unknown');

});
