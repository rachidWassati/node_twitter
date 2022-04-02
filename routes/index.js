const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');
const api = require('./api');

router.use('/api', api);

router.get('/tweet/new', (req, res) => {
    res.render('tweets/tweet-form');
})

router.get('/', (req, res) => {

    Tweet.find({})
        .exec()
        .then(tweets => {
            res.render('tweets/tweet-list', {tweets});
        })
})

module.exports = router;

