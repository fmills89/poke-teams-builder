export const getSavedPokemonIds = () => {
    const savedPokemonIds = localStorage.getItem('saved_pokemon')
        ? JSON.parse(localStorage.getItem('saved_pokemon'))
        : [];
    return savedPokemonIds;
};

export const savePokemonIds = (pokemonIdArr) => {
    if (pokemonIdArr.length) {
        localStorage.setItem('saved_pokemon', JSON.stringify(pokemonIdArr));
    } else {
        localStorage.removeItem('saved_pokemon');
    }
};

export const removePokemonId = (pokemonId) => {
    const savedPokemonIds = localStorage.getItem('saved_pokemon')
        ? JSON.parse(localStorage.getItem('saved_pokemon'))
        : null;
    if (!savedPokemonIds) {
        return false;
    }
    const updatedSavedPokemonIds = savedPokemonIds?.((savedPokemonIds) => savedPokemonIds !== pokemonId);
    localStorage.setItem('saved_pokemon', JSON.stringify(updatedSavedPokemonIds));

    return true;
};