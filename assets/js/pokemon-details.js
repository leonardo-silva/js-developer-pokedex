const detailHeader = document.getElementById('detailHeader');
const queryString = location.search.substring(1);

function loadPokemonNumber() {
    detailHeader.innerHTML += `<span>${queryString}</span>`;
}

function getPokemonDetail() {
    return queryString;
}