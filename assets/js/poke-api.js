const pokeApi = {};

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

pokeApi.getPokemons = () => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .catch((error) => console.log(error));
};
