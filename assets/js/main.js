const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonList = document.getElementById('pokemonList');

function convertPokemonToLi(pokemon) {
  return `
    <ol class="pokemons">
        <li class="pokemon">
            <span class="number">#001</span>                
            <span class="name">${pokemon.name}</span>
            <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    </ol>
`;
}

fetch(url)
  .then((response) => response.json())
  .then((responseBody) => responseBody.results)
  .then((pokemons) => {
    for(let i=0; i< pokemons.length; i++){
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon);
    }
  })
  .catch(function (error) {
    console.error(error);
  });
