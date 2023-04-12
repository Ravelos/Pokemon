const pokeApi = {};

pokeApi.getPokemons = () => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .catch((error) => console.log(error));
};
