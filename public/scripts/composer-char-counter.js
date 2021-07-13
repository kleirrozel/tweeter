$(document).ready(function() {
  $("textarea").on("input", function(event) {
    const maxTweet = 140;
    const tweetLength = $(this).val().length;
    const remainingChar = maxTweet - tweetLength;

    $(this).parent().siblings().children(".counter").val(remainingChar)

    if (remainingChar <= 0) {
      $(".counter").css("color", "#ec4242")
      // would be cool if it prints, "Oops! you exceeded character limit!"
    } else {
      $(".counter").css("color", "#545149")
    }

  });
});