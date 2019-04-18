

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function createTweetElement(tweetData){
 let $tweet = $("<article>").addClass("tweet");
 let $header = $("<header>").addClass("article-header");
 let $avatar = $("<img>").addClass("image").attr("src",tweetData.user.avatars.small).appendTo($header);
 let $name = $("<h3>").addClass("name").text(tweetData.user.name).appendTo($header);
 let $handler = $("<span>").addClass("handler").text(tweetData.user.handle).appendTo($header);
 $header.appendTo($tweet);

 let $p = $("<div>").addClass("tweet-here").text(tweetData.content.text).appendTo($tweet);
 let $footer = $("<footer>").addClass("footer");
 let $timestamp =$("<p>").addClass("timestamp").text(moment(tweetData.created_at).fromNow()).appendTo($footer);

 let $icons = $("<div>").addClass("icons");
 let $flag =$("<i>").addClass("far fa-flag").appendTo($icons);
 let $heart =$("<i>").addClass("far fa-heart").appendTo($icons);
 let $share =$("<i>").addClass("fas fa-retweet").appendTo($icons);
 $icons.appendTo($footer);
 $footer.appendTo($tweet);

 return $tweet;
}



// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];




//Start the page load event here

$(document).ready(function(){

  loadTweets();
  $('form').on('submit', function(event) {
    event.preventDefault();
    let data = $(this).serialize();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: data,
      success: function(result){
        console.log("tweet was posted ",result);
        loadTweets();
        let form = document.getElementById('form');
        form.reset();
      },
      error: function(err){
        console.log("there was an error ",err);
      }
    })

  });


  function loadTweets(){
    $.ajax('/tweets', { method: 'GET' })
      .then(function(res){
        renderTweets(res);
      });
  }

  function renderTweets(tweets) {
    tweets.forEach(element => {
      $('#tweets-container').prepend(createTweetElement(element));
    }
  )};

});





