function Pokemon() {
}

Pokemon.prototype.getPokemon = function(number) {
  console.log(number);
  $.get('http://pokeapi.co/api/v2/pokemon/' + number).then(function(response) {
    $('#display-result').html("Name -> " + response.forms[0].name + "<br>Ability ->" + response.abilities[0].ability.name);
  }).fail(function(error) {
    $("#display-result").text(error.responseJSON.message);
  });
};

exports.pokemonModule = Pokemon;
