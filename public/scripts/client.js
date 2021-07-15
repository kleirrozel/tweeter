/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  /* Takes in a tweet object and is responsible
  for returning a tweet <article> element
  containing the entire HTML structure of the tweet */
  const createTweetElement = (tweetData) => {
    const $tweet = $(`
        <article class="tweet-container">
          <header class="user-details">
            <div class="pic-and-name">
              <img id="pic" src=${tweetData.user.avatars}>
              <p>${tweetData.user.name}</p>
            </div>
            <p class="username">${tweetData.user.handle}</p>
          </header>
          <div class="tweet">
            <p>${tweetData.content.text}</p>
          </div>
          <footer class="tweet-details">
            <p>${timeago.format(tweetData.created_at)}</p>
            <p class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </p>
          </footer>
        </article>
    `);
    return $tweet;
  };


  /* Responsible for taking in an array of tweet objects
  and then appending each one to the #tweets-container */
  const renderTweets = (tweets) => {
    tweets.forEach((user, index) => {
      console.log(user)
      $("#all-tweets").prepend(createTweetElement(user));
      // Changed append to prepend so that new tweets will be added to the top instead of down the list
    });
  };
  
  // renderTweets(tweetData); // Removed because tweets will be loaded dynamically through the API


  /* Responsible for fetching tweets 
  from the http://localhost:8080/tweets page.
  -- It should be requesting and handling 
  a JSON response instead of an HTML response */ 
  const loadTweets = () => {
    $.getJSON("/tweets", function(data) {
      renderTweets(data);
      console.log(data);
    })
  };

  loadTweets();
});