import React, {Component} from 'react';
import  '../css/App.css';
import logo from '../images/earth.svg';

//import mocks from './mocks';
class Header extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }
}

export default Header;
