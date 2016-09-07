var vue = new Vue({
  el: '#app',
  data: {
    tweets: [
      {
        text: 'Tweet teste blablabla #teste #tentando',
        id: 's5a4dfa6sfds6f4shg4jiu',
        user: { name: 'Gustavo' }
      }
    ]
  },
  methods: {
    getTweets: function() {
      var $this = this;
      axios.get('/tweets')
        .then(function(response) {
          $this.tweets = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});