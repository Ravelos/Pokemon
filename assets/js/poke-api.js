const pokeApi = {};

function convertPokemonApiDetailsToPokemon(pokemonDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokemonDetail.id;
  pokemon.name = pokemonDetail.name;

  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonsDetails = (pokemon) => {
  return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokemonApiDetailsToPokemon)
};

pokeApi.getPokemons = (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};
