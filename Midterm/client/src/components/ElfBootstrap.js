/**
 * Created by bcuser on 5/10/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Debug from '../elf-logger';
const logger = new Debug('show-new-gist', 'blue', 'yellow', '24px');
//var fetch = require('../mocks').fetch;

class GetBoot extends Component {
    constructor(props) {
        super(props);
        logger.log('show new gist constructor called ');
    }

    render() {
        return (
            <div className='App'>
                <p className='App-intro' id='id'>
                    Id: {this.props.gitBoot.id}
                </p>
                <p className='App-intro' id='url'>
                    Url: {this.props.gitBoot.url}
                </p>
                <p className='App-intro' id='name'>
                    Name: {this.props.gitBoot.name}
                </p>
                <p className='App-intro' id='description'>
                    Description: {this.props.gitBoot.description}
                </p>
                <p className='App-intro' id='network_count'>
                    Network count: {this.props.gitBoot.network_count}
                </p>
                <p className='App-intro' id='subscribers_count'>
                    Subscribers count: {this.props.gitBoot.subscribers_count}
                </p>
                <button className='getBoot' id='getBoot' onClick={this.props.fetchBoot}>Get Bootstrap</button>
            </div>
        );
    }
}

export default GetBoot;
