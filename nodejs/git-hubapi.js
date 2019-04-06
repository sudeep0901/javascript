const express = require('express');
const request = require('request');
const chalk = require('chalk');

const app = express();
// Section 2- configure variables and different urls
// config to define app settings
// use environment variables [ process.env ] for sensitive data like api keys and secrets
var config = {
    client_id: process.env.github_client_id,
    client_secret: process.env.github_client_secret,
    redirect_url: 'http://localhost:3000/github/callback',
    authorize_url: 'https://github.com/login/oauth/authorize?client_id='+process.env.github_client_id,
    token_url: 'https://github.com/login/oauth/access_token',
    user_url: 'https://github.com/api/v2/json/user/show',
    scope: 'user'
};

// Section-3 Define the routes and callback url

// define routes

app.get("/github/auth", function (req, res) {
    console.log(process.env.github_client_id);
    return res.redirect(config.authorize_url);
});

app.get("/github/callback", function (req,res) {
    // extract authorize code 
    var code = req.query.code;
    console.log(chalk.green(code));
    // configure request params
    options = {
        method: 'POST',
        uri: config.token_url,
        formData: {
            client_id: config.client_id,
            client_secret: config.client_secret,
            code: code
        },
        headers: {
            accept: 'application/json'
        }
    }

    // make a request for auth_token using above options
    request(options, function (e, r, b) {
        // process the body
        console.log("requsting cliend authorizated data");
        if (b) {
            jb = JSON.parse(b);
            console.log(chalk.red(jb));

            // configure request to fetch user information

            options_user = {
                method: 'GET',
                url: config.user_url + '?access_token=' + jb.access_token,
                headers: {
                    accept: 'application/json',
                    'User-Agent': 'custom'
                }
            }
            request(options_user, function (e, r, bb) {
                if (bb) {
                    var bo = JSON.parse(bb);
                    console.log(chalk.yellow(bo));
                    var resp = {
                        name: bo.name,
                        url: bo.url,
                        id: bo.id,
                        bio: bo.bio
                    }
                    return res.json(resp)
                }
            });
        }
    });
});

app.listen(3000, () => console.log('Njera github-api app listening on port 3000!'));