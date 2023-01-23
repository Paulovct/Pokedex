const pokemonOl =document.getElementById("pokemonOl")
const loadMore=document.getElementById("loadMore")
let offset=0
const limit=5

const maxRecords=151


function loadPokemonItems(offset,limit){
	pokeApi.getPokemons(offset,limit).then((pokemons =[])=>{
		pokemonOl.innerHTML+=pokemons.map((pokemon)=>
			`<li class="pokemon ${pokemon.type}">
	        	<span class="number">#${pokemon.number}</span>               
	        	<span class="name">${pokemon.name}</span>

	        	<div class="detail">
	          		<ol class="types">
	            		${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join("")}
	          		</ol>

	          		<img src="${pokemon.photo}" alt="${pokemon.name}">
	        	</div> 
	    </li>`
	    ).join("")
		})
}

loadPokemonItems(offset,limit)

loadMore.addEventListener("click",()=>{
	offset+=limit
	const qtdeRecordsNewPage=offset + limit

	if(qtdeRecordsNewPage >= maxRecords){
		const newLimit=maxRecords-offset
		loadPokemonItems(offset,newLimit)
		loadMore.parentElement.removeChild(loadMore)	
	}else{
		loadPokemonItems(offset,limit)
	}
})

