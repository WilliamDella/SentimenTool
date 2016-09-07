var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'hjqZpuUJ17qRSRxYHw0DvxNHT',
    consumer_secret: 'B2eUpn6BBxm7nKfom7jCdSqwkOgzMa0d60jP5bdPdO06MXPX88',
    access_token_key: '752139468971335681-SWteQZLMHW3VYbWWnI0awmgegzNgW78',
    access_token_secret: '8dQ69uSCXsXzL4ci1QH1aqJ3nqNSz0m9yzeZImMsFJgNA'
});

client.get('search/tweets', {q: 'masterchef'}, function(error, tweets, response) {
    console.log(tweets);
});