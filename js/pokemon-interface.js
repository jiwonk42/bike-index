var Pokemon = require("./../js/pokemon.js").pokemonModule;

$(document).ready(function() {
  var currentPokemon = new Pokemon();
  $('#pokemon-form').submit(function() {
    event.preventDefault();
    var input = $('#pokemon-input').val().toLowerCase();
    currentPokemon.getPokemon(input);
  });
});
