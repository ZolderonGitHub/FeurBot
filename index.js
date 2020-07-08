console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
const config = require('./config');

const word = 'quoi'; // query
const response = 'feur'; // answer

var T = new Twit(config);

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  // Search if the tweet contains the word
  if (eventMsg.text.split(" ").includes(word)) {
    // answer
    T.post('statuses/update', { status: response, in_reply_to_status_id: eventMsg.id_str }, tweeted);
    function tweeted(err, reply) {
      if (err) {
        console.log(err);
      } else {
        console.log(reply.text) // you can delete that, or replace by a log file
      }
    }
  }
}
