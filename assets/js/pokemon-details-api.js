const pokeDetailsApi = {}
//const pokemon = null;

function convertPokeDetailsApiToPokemonDetails(paramPokeDetailJson) {
    const pokemon = new Pokemon()
    pokemon.number = paramPokeDetailJson.id
    pokemon.name = paramPokeDetailJson.name
    
    const types = paramPokeDetailJson.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type
    
    pokemon.photo = paramPokeDetailJson.sprites.other.dream_world.front_default
    
    const pokemonDetails = new PokemonDetails()
    pokemonDetails.pokemon = pokemon
    pokemonDetails.abilities = paramPokeDetailJson.abilities.map((item) => item.ability.name)
    pokemonDetails.height = paramPokeDetailJson.height
    pokemonDetails.weight = paramPokeDetailJson.weight
    pokemonDetails.species = paramPokeDetailJson.species.name

    return pokemonDetails
}

pokeDetailsApi.getPokemonDetailsById = (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeDetailsApiToPokemonDetails)
}
