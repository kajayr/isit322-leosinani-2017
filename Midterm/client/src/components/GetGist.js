/**
 * Created by bcuser on 5/9/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
//import fieldDefinitions from '../field-definitions';
import Debug from '../elf-logger';
const logger = new Debug('show-new-gist', 'blue', 'yellow', '24px');
//var fetch = require('../mocks').fetch;

class GetGist extends Component {
    constructor(props) {
        super(props);
        logger.log('show new gist constructor called ');

    }

    render() {
        return (
            <div className='App'>
                <p className='App-intro' id='url'>
                    url: {this.props.gitGist.url}
                </p>
                <p className='App-intro' id='description'>
                    description: {this.props.gitGist.description}
                </p>
                <p className='App-intro' id='id'>
                    id: {this.props.gitGist.id}
                </p>
                <p className='App-intro' id='pull-url'>
                    git pull url: {this.props.gitGist.git_pull_url}
                </p>
                <p className='App-intro' id='login'>
                    login: {this.props.gitGist.owner.login}
                </p>
                <p className='App-intro' id='owner url'>
                    owner url: {this.props.gitGist.owner.url}
                </p>
                <button className='getGist' onClick={this.props.fetchGist}>Create a Gist</button>
            </div>
        );
    }
}

export default GetGist;
