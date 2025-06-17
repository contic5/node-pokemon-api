//This auto-caches retrieved data, so I do not need to retrieve it from api every time that I use the data.

import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();
import * as shared_data from '/src/shared_data.js';

function toTitleCase(str) 
{
    //https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
function prepare_stat_name(stat_name)
{
    stat_name=stat_name.replace("-"," ");
    stat_name=toTitleCase(stat_name);
    return stat_name;
}
function get_names()
{
    const interval = {
    limit: 10000,
    offset: 0
    };
    
    P.getPokemonsList(interval)
        .then((response) => {
            //console.log(response);
            for(let result of response.results)
            {
                names.push(result.name);
            }
        //console.log(names);
        get_next_pokemon();
    });
}
function get_pokemon_data(response)
{
    for(let item of response)
    {
        let pokemon={};
        pokemon.Name=toTitleCase(item.forms[0].name.replace("-"," "));
        pokemon.img_src=item.sprites.front_default;

        let parts=item.species.url.split("/");
        let pokedex_number=parts[parts.length-2];
        pokemon.Pokedex_Number=parts[parts.length-2];

        pokemon.Pokemon_ID=item.order;
        if(pokemon.Pokemon_ID==-1)
        {
            pokemon.Pokemon_ID=pokemon_index;
        }
        pokemon.True_ID=item.id;
        
        pokemon.Generation="Other Forms";
        for(let i=0;i<shared_data.national_pokedex_sizes.length;i++)
        {
            if(pokedex_number<=shared_data.national_pokedex_sizes[i])
            {
                pokemon.Generation=shared_data.generations[i];
                break;
            }
        }

        pokemon.True_Generation="Other Forms";
        for(let i=0;i<shared_data.national_pokedex_sizes.length;i++)
        {
            if(pokemon.True_ID<=shared_data.national_pokedex_sizes[i])
            {
                pokemon.True_Generation=shared_data.generations[i];
                break;
            }
        }

        
        let types_written="";
        let type_names=[];
        for(let i=0;i<item.types.length;i++)
        {
            let type=item.types[i];
            type_names.push(type.type.name);
            types_written+=type.type.name;
            if(i<item.types.length-1)
            {
                types_written+=" | ";
            }
        }
        pokemon.Type1=type_names[0];
        pokemon.Type2="";
        if(type_names.length==2)
        {
            pokemon.Type2=type_names[1];
        }
        pokemon.Types=types_written;
        
        let stat_total=0;
        for(let stat of item.stats)
        {
            let stat_name=prepare_stat_name(stat.stat.name);
            if(stat_name=="Hp"||stat_name=="Id")
            {
                stat_name=stat_name.toUpperCase();
            }
            stat_total+=stat.base_stat;
            pokemon[stat_name]=stat.base_stat;
        }
        pokemon.Total=stat_total;
        pokemon_list.push(pokemon);
    }
}
function generate_table()
{
    results_div.innerHTML="";
    let table=null;
    let tr=null;
    let generation="START";
    pokemon_within_generation=0;

    for(let pokemon of pokemon_list)
    {
        if(pokemon.True_Generation!=generation)
        {
            generation=pokemon.True_Generation;

            let h2=document.createElement("h2");
            results_div.appendChild(h2);
            h2.innerHTML=generation;

            table=document.createElement("table");
            results_div.appendChild(table);
            tr=document.createElement("tr");
            table.appendChild(tr);
            pokemon_within_generation=0;
        }
        else if(pokemon_within_generation%5==0)
        {
            tr=document.createElement("tr");
            table.appendChild(tr);
        }

        let type=pokemon.Type1;
        //console.log(type);
        let td=document.createElement("td");
        td.style.backgroundColor=shared_data.type_colors[type];
        
        let img=document.createElement("img");
        td.appendChild(img);
        img.src=pokemon.img_src;
        
        let p=document.createElement("p");
        td.appendChild(p);
        p.innerHTML=pokemon.Name;
        
        if(img.src!=null)
        {
            tr.appendChild(td);
        }
        pokemon_within_generation+=1;
    }
}
function get_next_pokemon()
{
    P.getPokemonByName([names[pokemon_index]]) // with Promise
  .then((response) => 
    {
        handle_response(response);
    })
  .catch((error) => {
    console.log('There was an ERROR: ', error);
  });
}
function handle_response(response)
{
    //console.log(`${pokemon_index} ${pokemon_within_generation} ${pokemon_within_generation%pokemon_per_row}`);
    pokemon_index+=1;

    if(pokemon_index<=max_id&&pokemon_index<names.length)
    {
        get_next_pokemon();
        if(pokemon_index%25==0)
        {
            console.log(pokemon_index);
            generate_table();
        }
    }
    else
    {
        console.log(pokemon_list);
        generate_table();
    }
    get_pokemon_data(response);
}


let pokemon_index=0;
let pokemon_within_generation=1;
let max_id=10000;
let pokemon_per_row=5;

const results_div=document.getElementById("results");
let table=null;
let tr=null;

let names=[];
let pokemon_list=[];
get_names();