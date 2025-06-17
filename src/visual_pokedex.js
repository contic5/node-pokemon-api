//This auto-caches retrieved data, so I do not need to retrieve it from api every time that I use the data.

import Pokedex from 'pokedex-promise-v2';
import * as shared_data from '/src/shared_data.js';
import * as shared_functions from '/src/shared_functions.js';

function toTitleCase(str) 
{
    //https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
function check_closing_interval()
{
    let new_length=shared_functions.pokemon_list.length;
    if(last_length==new_length)
    {
        clearInterval(checkin_interval);
        setTimeout(check_closing_interval,1000);
    }
    else
    {
        last_length=new_length;
    }
    generate_table();
}
function generate_table()
{  
    console.log("Generating Table");
    console.log(shared_functions.pokemon_list);

    results_div.innerHTML="";
    let table=null;
    let tr=null;
    let generation="START";
    pokemon_within_generation=0;

    for(let pokemon of shared_functions.pokemon_list)
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
        else if(pokemon_within_generation%pokemon_per_row==0)
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


let pokemon_within_generation=1;
let max_id=10000;
let pokemon_per_row=5;

const results_div=document.getElementById("results");
let table=null;
let tr=null;

shared_functions.get_names();
let last_length=0;
let checkin_interval=setInterval(check_closing_interval,1000);