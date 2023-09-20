const sectionHeader = document.getElementById('section-header')
const detailName = document.getElementById('detail-name')
const queryString = new URLSearchParams(window.location.search)
const idParam = queryString.get('id')

document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

function loadPokeDetails(pokeId) {
  pokeDetailsApi.getPokemonDetailsById(pokeId).then((pokemonDetails) => {
    sectionHeader.classList.add(pokemonDetails.pokemon.type)
    detailName.innerHTML += getHtmlForNameAndAbilities(pokemonDetails)
    // detailName.innerHTML += `<span class="name">${pokemonDetails.pokemon.name}</span>`
  })
}

loadPokeDetails(idParam)

function getHtmlForNameAndAbilities(pokemonDetails) {
  return `
    <span class="name">${pokemonDetails.pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemonDetails.pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
    </div>
  `
}
