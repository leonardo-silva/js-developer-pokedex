const sectionHeader = document.getElementById('section-header')
const headerName = document.getElementById('header-name')
const headerId = document.getElementById('header-id')
const headerImg = document.getElementById('header-img')
const detailsBoard = document.getElementById('details-board')
const queryString = new URLSearchParams(window.location.search)
const idParam = queryString.get('id')

document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

function loadPokeDetails(pokeId) {
  pokeDetailsApi.getPokemonDetailsById(pokeId).then((pokemonDetails) => {
    sectionHeader.classList.add(pokemonDetails.pokemon.type)
    headerName.innerHTML += getHtmlForNameAndAbilities(pokemonDetails.pokemon)
    headerId.innerHTML += `<span class="pokeId">#${pokeId}</span>`
    headerImg.innerHTML += `<img src="${pokemonDetails.pokemon.photo}" alt="${pokemonDetails.pokemon.name}">`
    detailsBoard.innerHTML = getHtmlForDetailsBoard(pokemonDetails)
  })
}

loadPokeDetails(idParam)

function getHtmlForDetailsBoard(pokemonDetails) {
  return `
    <table class="table">
      <tr>
          <td class="td-1">Species</td>
          <td class="td-2">${pokemonDetails.species}</td>
      </tr>
      <tr>
          <td class="td-1">Height</td>
          <td class="td-2">${pokemonDetails.height}</td>
      </tr>
      <tr>
          <td class="td-1">Weight</td>
          <td class="td-2">${pokemonDetails.weight}</td>
      </tr>
      <tr>
          <td class="td-1">Abilities</td>
          <td class="td-2">${pokemonDetails.abilities.map((ability) => ability).join(', ')}</td>
      </tr>
    </table>
  `
}

function getHtmlForNameAndAbilities(pokemon) {
  return `
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
    </div>
  `
}
