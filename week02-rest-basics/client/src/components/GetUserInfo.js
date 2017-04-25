import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

//import mocks from './mocks';
//var fetch = require('../mocks').fetch;


class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for express server'

        };

    }

    getUser = () => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:
            var body = JSON.parse(json.body);
            that.setState({userLogin: body.login});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>

                <p className="App-intro">
                    state.file: {this.state.file}
                </p>

                <button className="getUser" onClick={this.getUser}> Get Foo</button>
            </div>
        );
    }
}

export default GetUserInfo;
