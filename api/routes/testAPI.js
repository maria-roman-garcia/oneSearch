var express = require("express");
var router = express.Router();


const Twit = require('twit');
// const content = require('./content.js');

let T = new Twit({
  consumer_key:         '8ecoccYbkasGx1NF8rImvt8Wh',
  consumer_secret:      'bCniWbDapzSQvKPAawsNKTAZKj0QoI6r48v4SKXBoAeqYKKCm8',
  access_token:         '1225022005050773505-mHw2DQhlWZT1l5phmtxHPLFO0a66SY',
  access_token_secret:  'RuolBV5bVg7t3ON4VseqZJU9iW2sdmvp7kYoqTsoEsMvf',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

router.get("/testAPI/:palabra", function(req, res, next) {

  console.log(req.params.palabra)
  // makeTwitterCall(req.params.palabra)
  T.get('search/tweets', { q: req.params.palabra + ' since:2020', count: 10, lang: 'es' }, function(err, data, response) {
    res.send(data);
  });
});


module.exports = router;