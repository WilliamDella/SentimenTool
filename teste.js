var error = function(err, response, body) {
    console.log('ERROR [%s]', err);
};

var success = function(data) {
    var teste = JSON.parse(data);
    var x = teste.statuses.length;
    for(var i = 0; i < x; i++){
        console.log(teste.statuses[i].text + '\n');
        console.log('----------------------------------------------------------------------------');
    }        
};

var Twitter = require('twitter-node-client').Twitter;

var config = {
    "consumerKey" : "hjqZpuUJ17qRSRxYHw0DvxNHT",
    "consumerSecret" : "B2eUpn6BBxm7nKfom7jCdSqwkOgzMa0d60jP5bdPdO06MXPX88",
    "accesToken" : "752139468971335681-SWteQZLMHW3VYbWWnI0awmgegzNgW78",
    "accesTokenSecret" : "8dQ69uSCXsXzL4ci1QH1aqJ3nqNSz0m9yzeZImMsFJgNA"
};

var twitter = new Twitter(config);

twitter.getSearch({'q': 'coca cola', 'count' : 100, 'lang': 'pt', 'result_type' : 'recent'}, error, success);