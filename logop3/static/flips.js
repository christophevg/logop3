$( document ).ready(function() {

  $(".flips").on("click", ".flip", function(e) {
    $(e.currentTarget).toggleClass("upside-down");
  });

});
