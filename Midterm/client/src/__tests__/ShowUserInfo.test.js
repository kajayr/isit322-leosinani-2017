import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import {mount} from 'enzyme';
import fieldDefinitions from '../field-definitions';
import ElfDebug from '../ElfDebug';
const elfShow = new ElfDebug(false);

describe('My ShowUserInfo test', function() {
    let bodyData = {};

    beforeEach(function() {
        const tempBody = {};
        for (let value of fieldDefinitions) {
            tempBody[value.id] = value.sample;
        }
        bodyData = tempBody;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
            fields={fieldDefinitions}
            gitData={bodyData}
            onChange={function() {
            }}
        />, div);
    });

    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo fields={fieldDefinitions} gitData={bodyData} onChange={function() {
        }}/>);
        const nineSign = <p className='ElfFormParagraph' id='login'>login-unknown</p>;
        //elfShow.getAll(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

    it('renders button click message for login', () => {
        const wrapper = mount(<ShowUserInfo fields={fieldDefinitions} gitData={bodyData} onChange={function() {
        }}/>);
        const inputElement = <p className='ElfFormParagraph' id='login'>login-unknown</p>;
        wrapper.find('button.getUser').simulate('click');
        elfShow.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(inputElement)).toEqual(true);
    });
});
