import Pokedex from 'pokedex-promise-v2';
import * as shared_data from '/src/shared_data.js';

const P = new Pokedex();
let names=[];
export let pokemon_list=[];
let pokemon_index=0;

function toTitleCase(str) 
{
    //https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
export function prepare_stat_name(stat_name)
{
    stat_name=stat_name.replace("-"," ");
    stat_name=toTitleCase(stat_name);
    return stat_name;
}
export async function get_names()
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
		get_all_pokemon();
	});
}
export function get_pokemon_data(response)
{
    //console.log(response);
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
        pokemon.Best_Attack=Math.max(pokemon["Special Attack"],pokemon["Attack"]);
		pokemon.Total=stat_total;
		pokemon_list.push(pokemon);
	}
}
export async function get_all_pokemon()
{
    console.log("GETTING ALL POKEMON");
    for(let pokemon_index=0;pokemon_index<names.length;pokemon_index++)
    {
        //console.log(`${pokemon_index} ${names.length}`)
        await P.getPokemonByName([names[pokemon_index]]) // with Promise
        .then((response) => 
            {
                get_pokemon_data(response);
            })
        .catch((error) => {
            console.log('There was an ERROR: ', error);
        });
    }
    console.log(pokemon_list);
}