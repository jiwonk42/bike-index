function Pokemon() {
}

Pokemon.prototype.getPokemon = function(input) {
  console.log(input);
  $.get('http://pokeapi.co/api/v2/pokemon/' + input).then(function(response) {
    var newTypes = "";
    for (var i = 0; i < response.types.length; i++) {
      var currentType = response.types[i]["type"].name;
      newTypes = currentType + ", " + newTypes;
    }
    $('#display-result').html("POKe´DEX idNo -> " + response.id + "<br>Name -> " + response.forms[0].name + "<br>Types -> " + newTypes + "<br>Ability -> " + response.abilities[0].ability.name + "<br>Sprite -><img src='" + response.sprites["front_default"] + "'/>");
  }).fail(function(error) {
    $("#display-result").text(error.responseJSON.message);
  });
};

exports.pokemonModule = Pokemon;
