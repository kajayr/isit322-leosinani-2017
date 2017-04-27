import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

//import mocks from './mocks';
//var fetch = require('../mocks').fetch;


class App extends Component {
    constructor() {
        super();
        this.state = {
           gitUser:{}

        };

    }

    getUser = () => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:
            var body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    login: {this.state.gitUser.login}
                </p>

                <p className="App-intro">
                    Avatar URL: {this.state.gitUser.avatar_url}
                </p>

                <button className="getUser" onClick={this.getUser}> Get Git User</button>
            </div>
        );
    }
}

export default GetUserInfo;
