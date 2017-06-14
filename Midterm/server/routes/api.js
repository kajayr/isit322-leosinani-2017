/**
 * Created by bcuser on 4/11/17.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

// unauthenticated client
let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: '5f636d863cf1e57036f23b33a384b7fbf842739d'
        });
    } else {
        gh = new GitHub({
            username: 'Leo',
            password: ''
        });
    }
    return gh;
};

/* GET home page. */
router.get('/foo', function(request, response, next) {
    var message = {'result': 'success', 'foo': 'bar', 'file': 'api.js'};
    console.log('Foo called on server with message:', message);
    response.send(message);
});

router.get('/user', function(req, res, next) {
    var options = {
        url: 'https://api.github.com/users/kajayr',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});

router.get('/bootstrap', function(req, res, next) {
    var options = {
        url: 'https://api.github.com/repos/twbs/bootstrap',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});

router.get('/gist-test', function(req, response, next) {
    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            'file1.txt': {
                content: 'Arent gists great!'
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('Retreived', retrievedGist);
        response.status(200).send({'result': retrievedGist});

        // do interesting things
    }).catch(function(err) {
        console.log('promise rejected');
        response.status(500).send({'result': err});
    });
});

module.exports = router;
