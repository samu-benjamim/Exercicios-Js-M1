const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
let limit = 10;
const offset = 0;
let record = 0
const maxRecord = 120;

function loadPokemonItens (offset, limit) {
    function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="window.location.href='pokemon.html?name=${pokemon.name}'">
            <span class="number">#${pokemon.id.toString().padStart(4, '0')}</span>
            <span class="pokemon-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
            
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type.toUpperCase()}</li>`). join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}">
            </div>
        </li>
        `
    }
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtlm = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtlm
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    limit = limit + 10
    if (record >= maxRecord){
        loadPokemonItens(offset, limit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{
        loadPokemonItens(offset, limit)
        record++
    }
})
