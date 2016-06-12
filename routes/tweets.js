var express = require('express');
var getTodayTweets = require('../server/twitterService');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  getTodayTweets().then(ts => {
    res.send(ts);
  })
  .catch(err => console.log(err));
});

module.exports = router;
