/**
 * Created by bcuser on 5/9/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import GetUserInfo from './GetUserInfo';
import GetFoo from './GetFoo';
import GetBoot from './ElfBootstrap';
import GetGist from './GetGist';
import Smallnumbers from './Smallnumbers';
import numbersInit from '../numbers-data';
import fieldDefinitions from '../field-definitions';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Debug from '../elf-logger';
import '../css/menu.css';
import ElfHeader from './ElfHeader';
const logger = new Debug('data-maven', 'blue', 'yellow', '24px');
//var fetch = require('../mocks').fetch;

class DataMaven extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitData: tempGitUser,
            gitGist: {
                url: 'url-qux',
                id: 'id-qux',
                git_pull_url: 'pull-url-qux',
                description: 'description-qux',
                owner: {
                    login: 'owner login',
                    url: 'owner url'
                }
            },
            gitBoot: {
                id: 'boot-id',
                url: 'boot-url',
                name: 'name goes here',
                description: 'a description will go here',
                network_count: 'network count goes here',
                subscribers_count: 'subscribers count goes here'
            }
        };
        this.debug = this.debug.bind(this);
        this.getUser = this.getUser.bind(this);
        this.fetchGist = this.fetchGist.bind(this);
        this.getBoot = this.getBoot.bind(this);
    }

    debug(message) {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getUser(event) {
        const that = this;
        fetch('/api/user')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            logger.log('parsed json', json);
            var getData = JSON.parse(json.body);
            that.setState({
                gitData: getData
            });
        }).catch(function(ex) {
            logger.log('parsing failed', ex);
        });
        event.preventDefault();
    };

    fetchGist(event) {
        const that = this;
        fetch('/api/gist-test')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            logger.log('parsed json', json);
            var getGist = json.result;
            that.setState({
                gitGist: getGist
            });
        }).catch(function(ex) {
            logger.log('parsing failed', ex);
        });
        event.preventDefault();
    };

    getBoot() {

        const that = this;

        fetch('/api/bootstrap')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            var bootData = JSON.parse(json.body);
            logger.log(bootData);
            that.setState({
                gitBoot: bootData
            });
        }).catch(function(ex) {
            logger.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <ElfHeader/>
                    <Route exact path='/'
                           render={(props) => (
                               <GetUserInfo {...props}
                                            fields={fieldDefinitions}
                                            gitData={this.state.gitData}
                                            onChange={this.getUser}/>
                           )}
                    />

                    <Route exact path='/GetFoo' component={GetFoo}/>

                    <Route exact path='/GetBoot'
                           render={(props) => (
                               <GetBoot {...props}
                                        gitBoot={this.state.gitBoot}
                                        fetchBoot={this.getBoot}/>
                           )}
                    />
                    <Route exact path='/show-new-gist'
                           render={(props) => (
                               <GetGist {...props}
                                        gitGist={this.state.gitGist}
                                        fetchGist={this.fetchGist}/>
                           )}
                    />
                    <Route path='/get-numbers'
                           render={(props) => (
                               <Smallnumbers {...props}
                                             numbers={numbersInit}/>
                           )}
                    />
                </div>
            </Router>
        );
    }
}

export default DataMaven;
