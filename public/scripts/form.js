/* Add an event listener that listens for the *submit* event and
prevents the default behaviours: data submission & page refresh.
Create an AJAX post request that sends the serialized data to the server to the server.
 */
$(document).ready(function() {
  $("#form-id").submit(function(event) {
    event.preventDefault();
    const $form = $(this).serialize();

    // console.log("THIS IS THE NEW CL:", $("#text").val().length)
    // console.log(event.target.text.value);
    if ($("#text").val().length > 140) {
      return alert("Yikes! You hummed too much. Try humming a little less.");
    } else if ($("#text").val().length === 0) {
      return alert("I hear nothing. Type to start humming.");
    } else {
      $.post("/tweets", $form).done(function() {
        // console.log("I want to see this in the console when a form is successfully submitted")
      })
    }
  });
});