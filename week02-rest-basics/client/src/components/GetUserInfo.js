import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            gitUser: {
                login: "Your login information",
                id: "Your id number",
                avatar_url: "Your avatar",
                gravatar_id: "Your avatar ID number",
                name: "Your name"
            }
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
                    id: {this.state.gitUser.id}
                </p>

                <p className="App-intro">
                    avatar_url: {this.state.gitUser.avatar_url}
                </p>

                <p className="App-intro">
                    gravatar_id: {this.state.gitUser.gravatar_id}
                </p>

                <p className="App-intro">
                    name: {this.state.gitUser.name}
                </p>

                <button id="GetUserInfo" onClick={this.getUser}> Get Git User</button>
            </div>
        );
    }
}
export default GetUserInfo;
