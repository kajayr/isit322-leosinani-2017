/**
 * Created by bcuser on 4/11/17.
 */
import Header from './components/Header';

var express = require('express');
var router = express.Router();

var request = require('request');

// EXISTING CODE OMITTED HERE
router.get('/user', function (req, res, next) {
    var options = {
        url: 'https://api.github.com/users/kajayr',
        headers: {
            'User-Agent': 'request'
        }
    };

    router.get('/user', function (req, res, next) {
        var options = {
            url: 'https://api.github.com/users/charliecalvert',
            headers: {
                'User-Agent': 'request'
            }
        };

        request(options, function (error, response, body) {
            // Print the error if one occurred
            console.log('error:', error);
            // Print the response status code if a response was received
            console.log('statusCode:', response && response.statusCode);
            // Print the HTML for the Google homepage.
            console.log('body:', body);
            res.send({error: error, response: response, body: body});
        });
    });

    request(options, function (error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});

// Code omitted here

it.only('renders and reads H1 text', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

/* GET home page. */
router.get('/foo', function (request, response, next) {
    var message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };
    console.log('Foo called on server with message:', message);
    response.send(message);
});

it.only('renders and reads H1 text', () => {
    const wrapper = shallow(<Header />);
    const welcome = <h2>Welcome to React</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
});


module.exports = router;