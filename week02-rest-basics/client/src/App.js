import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for express server'
        };
    }
bar = () => {
      // this.setState({foo: 'Clicked the express succesfully'});
    //this.setState({file: 'The results have been placed'});
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          state.foo: {this.state.foo}
        </p>
          <p className="App-intro">
             state.file: {this.state.file}
          </p>
          <button onClick={this.bar}> Click me </button>
      </div>
    );
  }
}

export default App;
