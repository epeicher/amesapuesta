let Twitter = require('twitter');
let filter = require('lodash/_arrayFilter');

const TWITTER_CONSUMER_KEY = 'n03diJxRqeZqHYBGHZY0PoG5g'
const TWITTER_CONSUMER_SECRET = '2PtvnNBYlfY53xU8AlhTC12IgWgT2HaK51Ko6CBvAH0impisKH'
const TWITTER_ACCESS_TOKEN_KEY = '1047693998-RurqUGHnvZ07A0Ga8phNt69FqXQpK87Y1HL4wtH'
const TWITTER_ACCESS_TOKEN_SECRET = 'qPHIOVL79m6wmfXnlh8gLR6WV03QOBnfG1yYfnnrCU'

const client = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  });

function getTodayTweets() {
  const params = {screen_name: 'bar_muriel'};
  return new Promise((resolve, reject) => {
      client.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
          reject(error);  
      } else {
        let todayTweets = filter(tweets, t => new Date(t.created_at) > (new Date).setHours(0,0,0,0));
        resolve(todayTweets.reverse().map(t => t.text));
      }
    });
  });
}

module.exports = getTodayTweets;