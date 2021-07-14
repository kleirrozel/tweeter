/* Add an event listener that listens for the *submit* event and
prevents the default behaviours: data submission & page refresh.
Create an AJX post request that sends the form to the server.
 */
$(document).ready(function() {
  $(".new-tweet").children("form").submit(function(event) {
    event.preventDefault();
    // console.log(event.target.text.value);
    const $form = $(this).serialize();
    // console.log(`THIS IS THE FORM ${$form}`);
    // Use the jQuery library to submit a POST request that sends the serialized data to the server
    $.post("/tweets", $form);
  });
});