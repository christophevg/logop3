$( document ).ready(function() {

  var die = $("#die");

  function rollDice() {
    toggleClasses();
    die.attr("data-roll", getRandomNumber(1, 6));
  }

  function toggleClasses() {
    die.toggleClass("odd-roll");
    die.toggleClass("even-roll");
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  die.click(rollDice);

  die.on('transitionend', function() {
    console.log("rolled", die.attr("data-roll"))
  });

});
