var express = require('express');
var app 	= express();
var Twitter = require('twitter-node-client').Twitter;
var url = require('url');

app.use(express.static('../public'));

var config = {
    "consumerKey" : "hjqZpuUJ17qRSRxYHw0DvxNHT",
    "consumerSecret" : "B2eUpn6BBxm7nKfom7jCdSqwkOgzMa0d60jP5bdPdO06MXPX88",
    "accesToken" : "752139468971335681-SWteQZLMHW3VYbWWnI0awmgegzNgW78",
    "accesTokenSecret" : "8dQ69uSCXsXzL4ci1QH1aqJ3nqNSz0m9yzeZImMsFJgNA"
};

var params = {
	'q': '#tim', 
	'count' : 100, 
	'lang': 'pt', 
	'result_type' : 'recent'
}

var twitter = new Twitter(config);

app.get('/tweets', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	twitter.getSearch(params, error, function(data) {
		var teste = JSON.parse(data);
		var x = teste.statuses.length;
		var tweets = [];
		for(var i = 0; i < x; i++){
			tweets.push({
				'text': teste.statuses[i].text, 
				'id': teste.statuses[i].id
			});
		}
		res.send(tweets);
	});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var error = function(err, response, body) {
    console.log('ERROR [%s]', err);
};