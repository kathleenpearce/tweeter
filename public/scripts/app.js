//Client Side JS
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
          counter.textContent = '140';
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





