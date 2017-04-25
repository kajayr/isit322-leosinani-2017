import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import './css/index.css';
import SmallNumbers from './components/SmallNumbers';
import numbersInit from './numbers-data';

ReactDOM.render(
    <div>
        <Header/>,
        <App />,
        <SmallNumbers numbers={numbersInit} />
    </div>,
    document.getElementById('root')
);
