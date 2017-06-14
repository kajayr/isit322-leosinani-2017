import '../css/App.css';
import React, {Component} from 'react';

class Smallnumbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nine: props.numbers.nine,
            eight: props.numbers.eight,
            seven: props.numbers.seven,
            six: props.numbers.six,
            five: props.numbers.five,
            four: props.numbers.four,
            three: props.numbers.three,
            two: props.numbers.two,
            one: props.numbers.one
        };
        this.getNine = this.getNine.bind(this);
        this.getEight = this.getEight.bind(this);
        this.getSeven = this.getSeven.bind(this);
        this.getSix = this.getSix.bind(this);
        this.getFive = this.getFive.bind(this);
        this.getFour = this.getFour.bind(this);
        this.getThree = this.getThree.bind(this);
        this.getTwo = this.getTwo.bind(this);
        this.getOne = this.getOne.bind(this);
        this.bar = this.bar.bind(this);
    }
    getNine() {
        this.setState({nine: '9'});
    };

    getEight() {
        this.setState({eight: '8'});
    };
    getSeven() {
        this.setState({seven: '7'});
    };
    getSix() {
        this.setState({six: '6'});
    };
    getFive() {
        this.setState({five: '5'});
    };
    getFour() {
        this.setState({four: '4'});
    };
    getThree() {
        this.setState({three: '3'});
    };
    getTwo() {
        this.setState({two: '2'});
    };
    getOne() {
        this.setState({one: '1'});
    };

    /*   fetch = () => {
     this.setState({ foo: 'bar' });
     return {
     then: function() {
     return {
     then: function () {
     return {
     catch: function() {}
     }

     }
     }
     }

     }

     };*/

    bar() {
        const that = this;
        fetch(this, '/api/foo')
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
            <div className='App'>

                <p className='App-intro'>
                    state.nine: {this.state.nine}

                </p>

                <p className='App-intro'>
                    state.eight: {this.state.eight}

                </p>
                <p className='App-intro'>
                    state.seven: {this.state.seven}

                </p>
                <p className='App-intro'>
                    state.six: {this.state.six}

                </p>
                <p className='App-intro'>
                    state.five: {this.state.five}

                </p>
                <p className='App-intro'>
                    state.four: {this.state.four}

                </p>
                <p className='App-intro'>
                    state.three: {this.state.three}

                </p>
                <p className='App-intro'>
                    state.two: {this.state.two}

                </p>
                <p className='App-intro'>
                    state.one: {this.state.one}

                </p>

                <button className='getNine' onClick={this.getNine}>Nine</button>
                <button className='getEight' onClick={this.getEight}>Eight</button>
                <button className='getSeven' onClick={this.getSeven}>Seven</button>
                <button className='getSix' onClick={this.getSix}>Six</button>
                <button className='getFive' onClick={this.getFive}>Five</button>
                <button className='getFour' onClick={this.getFour}>Four</button>
                <button className='getThree' onClick={this.getThree}>Three</button>
                <button className='getTwo' onClick={this.getTwo}>Two</button>
                <button className='getOne' onClick={this.getOne}>One</button>
            </div>
        );
    }
}

export default Smallnumbers;
