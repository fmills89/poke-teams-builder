export const searchPokemon = (query) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  };
  