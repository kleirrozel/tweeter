/* Add an event listener that listens for the *submit* event and
prevents the default behaviours: data submission & page refresh.
Create an AJAX post request that sends the serialized data to the server to the server.
 */
$(document).ready(function() {
  $(".new-tweet").children("form").submit(function(event) {
    event.preventDefault();

    const $form = $(this).serialize();
    
    $.post("/tweets", $form).done(function() {
      // // Do something after receiving the tweets
      // console.log("Successfully submitted")
    })
  });
});