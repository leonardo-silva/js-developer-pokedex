const sectionHeader = document.getElementById('section-header')
const detailHeader = document.getElementById('detail-header')
const queryString = new URLSearchParams(window.location.search)
const idParam = queryString.get('id')

function loadPokeDetails(pokeId) {
  pokeDetailsApi.getPokemonDetailsById(pokeId).then((pokemonDetails) => {
    sectionHeader.classList.add(pokemonDetails.pokemon.type)
  })
}

loadPokeDetails(idParam)

//detailHeader.innerHTML += `<span>id=${idParam}</span>`
