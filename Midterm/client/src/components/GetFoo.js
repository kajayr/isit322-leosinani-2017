import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

//var fetch = require('../mocks').fetch;

class GetFoo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'File Result will be placed here.',
            foo: 'waiting for express server'

        };
        this.quiet = true;
        this.debug = this.debug.bind(true);
        this.bar = this.bar.bind(this);
        this.getFoo = this.getFoo.bind(this);
    }

    bar() {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    };

    debug (message) {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getFoo() {

        const that = this;

        fetch('/api/foo')
            .then(function(response) {
                that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function(json) {
            that.debug('GETONE-FETCH-TWO');
            that.debug('parsed json', json);
            that.setState(foo => (json));
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className='App'>
                <p className='App-intro'>
                    state.foo: {this.state.foo}
                </p>
                <p className='App-intro'>
                    state.file: {this.state.file}
                </p>
                <button className='getFoo' onClick={this.getFoo}>Click Foo</button>
            </div>
        );
    }
}

export default GetFoo;
