function Pokemon() {
}

Pokemon.prototype.getPokemon = function(input) {
  console.log(input);
  $.get('http://pokeapi.co/api/v2/pokemon/' + input).then(function(response) {
    $('#display-result').html("Id -> " + response.id + "<br>Name -> " + response.forms[0].name + "<br>Ability -> " + response.abilities[0].ability.name + "<br>Sprite -><img src='" + response.sprites["front_default"] + "'/>");
  }).fail(function(error) {
    $("#display-result").text(error.responseJSON.message);
  });
};

exports.pokemonModule = Pokemon;
