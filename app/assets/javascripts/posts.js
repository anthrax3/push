// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("ready page:load", function() {

    // while editing a post
    $(".show-options").click(function(e) {
        e.preventDefault();
        $(".advanced-fields").addClass("fields--init");
    });

});