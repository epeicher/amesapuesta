var Twitter = require('twitter')
var filter = require('lodash/_arrayFilter')

const TWITTER_CONSUMER_KEY = 'CLjjP1zdmPy5hsag2oIaXNwFY'
const TWITTER_CONSUMER_SECRET = 'To07WwZtRNf381U21NL7d9J4gDINLGnFpm1Cd9mJcJZKx1McDw'
const TWITTER_ACCESS_TOKEN_KEY = '1047693998-RurqUGHnvZ07A0Ga8phNt69FqXQpK87Y1HL4wtH'
const TWITTER_ACCESS_TOKEN_SECRET = 'qPHIOVL79m6wmfXnlh8gLR6WV03QOBnfG1yYfnnrCU'




var client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
});

const params = {screen_name: 'bar_muriel'};

function getTodayTweets() {
  return new Promise((resolve, reject) => {
      client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
          reject(error);  
      } else {
        let todayTweets = filter(tweets, t => new Date(t.created_at) > (new Date).setHours(0,0,0,0));
        resolve(todayTweets);
      }
    });
  });
}

getTodayTweets().then(ts => console.log(ts));