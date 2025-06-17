//This auto-caches retrieved data, so I do not need to retrieve it from api every time that I use the data.
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();
import * as shared_data from "/src/shared_data.js";
import * as shared_functions from '/src/shared_functions.js';
console.log(shared_data);

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
        //setTimeout(check_closing_interval,1000);
    }
    else
    {
        last_length=new_length;
    }
    generate_table();
}
function generate_table_head()
{
    let tr=document.createElement("tr");
    thead.appendChild(tr);
    for(let column of columns)
    {
        let th=document.createElement("th");
        tr.appendChild(th);
        th.innerHTML=column;
        
        let asc_button=document.createElement("button");
        asc_button.classList.add("block");
        asc_button.innerHTML=`ASC`;
        asc_button.onclick=function()
        {
            sort_pokemon(column,false);
        };
        th.appendChild(asc_button);
        
        let desc_button=document.createElement("button");
        desc_button.classList.add("block");
        desc_button.innerHTML=`DESC`;
        desc_button.onclick=function()
        {
            sort_pokemon(column,true);
        };
        th.appendChild(desc_button);
    }
}
function sort_pokemon(column,ascending)
{
    if(typeof shared_functions.pokemon_list[0][column]=== "string")
    {
        if(ascending==true)
        {
            shared_functions.pokemon_list=shared_functions.pokemon_list.sort((a, b) => b[column].localeCompare(a[column]));
        }
        else
        {
            shared_functions.pokemon_list=shared_functions.pokemon_list.sort((a, b) => a[column].localeCompare(b[column]));
        }
    }
    else
    {
        if(ascending==true)
        {
            shared_functions.pokemon_list=shared_functions.pokemon_list.sort((a, b) => b[column] - a[column]);
        }
        else
        {
            shared_functions.pokemon_list=shared_functions.pokemon_list.sort((a, b) => a[column] - b[column]); 
        }
    }
    generate_table();
}
function filter_pokemon()
{
    let filtered_pokemon_list=[...shared_functions.pokemon_list];
    console.log(filtered_pokemon_list);
    
    
    console.log(`${min_hp} ${min_attack} ${min_defense} ${min_special_attack} ${min_special_defense} ${min_speed} ${min_total}`);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon.HP>=min_hp);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon.Attack>=min_attack);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon.Defense>=min_defense);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon["Special Attack"]>=min_special_attack);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon["Special Defense"]>=min_special_defense);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon.Speed>=min_speed);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon.Total>=min_total);
    filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon["Best_Attack"]>=min_best_attack);

    if(target_type!="All"&&target_type!="all")
    {
        filtered_pokemon_list=filtered_pokemon_list.filter((pokemon) => pokemon.Type1==target_type || pokemon.Type2==target_type);
    }
    return filtered_pokemon_list;
}
function generate_table()
{
    tbody.innerHTML="";
    let filtered_pokemon_list=filter_pokemon();
    console.log(shared_functions.pokemon_list.length+" "+filtered_pokemon_list.length);
    for(let pokemon of filtered_pokemon_list)
    {
        let tr=document.createElement("tr");
        tbody.appendChild(tr);
        for(let column of columns)
        {
            let td=document.createElement("td");
            tr.appendChild(td);
            td.innerHTML=pokemon[column];
        }
    }
}
export function update_values()
{
    min_hp=parseInt(document.getElementById("min_hp").value);
    min_attack=parseInt(document.getElementById("min_attack").value);
    min_defense=parseInt(document.getElementById("min_defense").value);
    min_special_attack=parseInt(document.getElementById("min_special_attack").value);
    min_special_defense=parseInt(document.getElementById("min_special_defense").value);
    min_speed=parseInt(document.getElementById("min_speed").value);
    min_total=parseInt(document.getElementById("min_total").value);
    min_best_attack=parseInt(document.getElementById("min_best_attack").value);
    target_type=document.getElementById("target_type").value;
    
    document.getElementById("min_hp_value").innerHTML=min_hp;
    document.getElementById("min_attack_value").innerHTML=min_attack;
    document.getElementById("min_defense_value").innerHTML=min_defense;
    document.getElementById("min_special_attack_value").innerHTML=min_special_attack;
    document.getElementById("min_special_defense_value").innerHTML=min_special_defense;
    document.getElementById("min_speed_value").innerHTML=min_speed;
    document.getElementById("min_total_value").innerHTML=min_total;
    document.getElementById("min_best_attack_value").innerHTML=min_best_attack;
    generate_table();
}


let columns=["Pokemon_ID","Pokedex_Number","Generation","Name","Type1","Type2","HP","Attack","Defense","Special Attack","Special Defense","Speed","Total","Best_Attack"];

let min_hp=0;
let min_attack=0;
let min_defense=0;
let min_special_attack=0;
let min_special_defense=0;
let min_speed=0;
let min_total=0;
let min_best_attack=0;
let target_type="All";

const results_div=document.getElementById("results");
let table=document.createElement("table");
results_div.appendChild(table);
let tbody=document.createElement("tbody");
table.appendChild(tbody);
let thead=document.createElement("thead");
table.appendChild(thead);
generate_table_head();

shared_functions.get_names();

let last_length=0;
let checkin_interval=setInterval(check_closing_interval,1000);