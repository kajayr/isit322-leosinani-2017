import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import ElfHeader from '../components/ElfHeader';
import {mount} from 'enzyme';
import ElfDebug from '../ElfDebug';
var elfDebug = new ElfDebug(false, 'header-test');

describe('My Header tests', function() {
    var quiet = false;

    function getFirst(wrapper) {
        const eightp = wrapper.find('h2').first().debug();
        if (!quiet) {
            console.log('HEADER:', eightp);
        }
    }
    // mount(<Router><ElfHeader /></Router>);
    it('renders and reads H1 text', () => {
        const wrapper = mount(<Router><ElfHeader /></Router>);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
        getFirst(wrapper);
    });
});
