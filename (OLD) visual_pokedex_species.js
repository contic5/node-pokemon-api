//This auto-caches retrieved data, so I do not need to retrieve it from api every time that I use the data.

import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

function toTitleCase(str) 
{
    //https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
function get_sprites(response)
{
    for(let item of response)
    {
        let type=item.types[0].type.name;
        //console.log(type);
        let td=document.createElement("td");
        tr.appendChild(td);
        td.style.backgroundColor=type_colors[type];
        
        let img=document.createElement("img");
        td.appendChild(img);
        img.src=item.sprites.front_default;
        
        let p=document.createElement("p");
        td.appendChild(p);
        p.innerHTML=toTitleCase(item.name);
    }
}
function handle_response(response)
{
    console.log(`${pokemon_id} ${pokemon_within_generation} ${pokemon_within_generation%pokemon_per_row}`);
    if(table==null||pokemon_id>national_pokedex_sizes[generation_index])
    {
        pokemon_within_generation=1;
        generation_index+=1;
        
        let h2=document.createElement("h2");
        h2.innerHTML=`${generation_index} ${generations[generation_index]}`;
        results_div.appendChild(h2);
        table=document.createElement("table");
        results_div.appendChild(table);
        tr=document.createElement("tr");
        table.appendChild(tr);
    }
    else if(tr==null||pokemon_within_generation%pokemon_per_row==1||pokemon_id==max_id)
    {
        console.log(pokemon_within_generation+" "+pokemon_id);
        tr=document.createElement("tr");
        table.appendChild(tr);
    }
    
    pokemon_id+=1;
    pokemon_within_generation+=1;
    if(pokemon_id<max_id&&pokemon_id<1026)
    {
        if(generation_index<=11)
        {
            get_next_pokemon();
        }
        else
        {
            setTimeout(get_next_pokemon,100);
        }
    }
    //console.log(response);
    get_sprites(response);
}
function get_next_pokemon()
{
    
    
    P.getPokemonByName([pokemon_id]) // with Promise
  .then((response) => 
    {
        handle_response(response);
    })
  .catch((error) => {
    console.log('There was an ERROR: ', error);
  });
    
    
}
const results_div=document.getElementById("results");
let national_pokedex_sizes=[151,251,386,493,649,721,809,905,1025];
let generations=["Kanto","Johto","Hoen","Sinnoh","Unova","Kalos","Alola","Galar","Paldea","Additional Forms"];
let generation="Pokemon";
let generation_index=-1;
let pokemon_id=1;
let pokemon_within_generation=1;
let max_id=1;
let pokemon_per_row=5;


//https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
const type_colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};
let table=null;
let tr=null;
get_next_pokemon();