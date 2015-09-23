//testing filter section
// <script type="text/javascript" src="js/filter.js"></script>
// var filtered = function() {
//   console.log("hello");
//   var user = $('.tweetUser').val(),
//     cloned = streams.home.slice(),
//     filtered = _.filter(cloned, function(tweet) {
//       return tweet.user === user;
//     });
//   var $tweetList = $('#tweetList');
//   $tweetList.html('');
//   //what does .html('') do?
//   var index = filtered.length - 1;
//   while (index >= 0) {
//     var tweet = filtered[index];
//     var $tweet = $('<div class="tweet section"></div>');
//     var $tweetUser = $('<div class="tweetUser"></div>');
//     $tweetUser.text('@' + tweet.user + ': ');
//     // Add materalize and set the class for the div
//     $tweet.text(tweet.message + " Uploaded at: " + tweet.created_at);
//     $tweet.prepend($tweetUser);
//     //Run a function when the user is clicked that filters out other users
//     $tweet.appendTo($tweetList);
//     index -= 1;
//   }
// };
// $('.tweetUser').on(click, filtered);
