import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
//import mocks from './mocks';
var fetch = require('./mocks').fetch;


class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for express server',
            nine: '0',
            eight: '0',
            seven: '0',
            six: '0'

        };

    }

    getNine = () => {
        this.setState({nine: '9'});

    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    getSeven = () => {
        this.setState({seven: '7'});
    };

    getSix = () => {
        this.setState({six: '6'});
    };

    fetch(){
       this.setState({ foo: "bar"} );
    }

    getFoo = () => {
        // this.setState({foo: 'Clicked the express succesfully'});
        //this.setState({file: 'The results have been placed'});
        const that = this;
        fetch(this,'/api/foo')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>

                <p className="App-intro">
                    state.file: {this.state.file}
                </p>
                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <p className="App-intro">
                    state.eight: {this.state.eight}
                </p>
                <p className="App-intro">
                    state.seven: {this.state.seven}
                </p>
                <p className="App-intro">
                    state.six: {this.state.six}
                </p>
                <button className="getFoo" onClick={this.getFoo}> Get Foo</button>
                <button className="getNine" onClick={this.getNine}> Get Nine</button>
                <button className="getEight" onClick={this.getEight}> Get Eight</button>
                <button className="getSeven" onClick={this.getSeven}> Get Seven</button>
                <button className="getSix" onClick={this.getSix}> Get Six</button>
            </div>
        );
    }
}

export default App;
