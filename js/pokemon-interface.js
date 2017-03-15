var Pokemon = require("./../js/pokemon.js").pokemonModule;

$(document).ready(function() {
  var currentPokemon = new Pokemon();
  $('#pokemon-form').submit(function() {
    event.preventDefault();
    var number = parseInt($('#pokemon-input').val());
    currentPokemon.getPokemon(number);
  });
});
