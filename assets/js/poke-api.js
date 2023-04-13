
const pokeApi = {};

const offset = 0;
const limit = 5;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

pokeApi.getPokemonsDetails = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonsDetails) => pokemonsDetails);
}
