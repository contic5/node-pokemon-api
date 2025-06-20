import Pokedex from 'pokedex-promise-v2';
import * as shared_data from '/src/shared_data.js';
import * as shared_functions from '/src/shared_functions.js';

function check_closing_interval()
{
    pokemon_list=[...shared_functions.pokemon_list];
    console.log(pokemon_list.length);
    if(shared_functions.done)
    {
        clearInterval(checkin_interval);
        //setTimeout(check_closing_interval,1000);
    }
    generate_canvas();
}
function clear()
{
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,c.width,c.height);
}
function generate_canvas()
{
    clear();
    let sorted_pokemon=pokemon_list;
    sorted_pokemon=sorted_pokemon.filter(pokemon=>pokemon.alternate_form==false);
    sorted_pokemon=sorted_pokemon.sort((a, b) => a["color_hue"]-b["color_hue"]);
    console.log(`color:${sorted_pokemon[0].color} hue:${sorted_pokemon[0].color_hue}`);

    let index=0;
    for(let i=0;i<columns;i++)
    {
        if(index>=pokemon_list.length)
        {
            break;
        }

        for(let j=0;j<rows;j++)
        {
            index=i*rows+j;
            if(index>=pokemon_list.length)
            {
                break;
            }

            const img = new Image();
            img.src=sorted_pokemon[index].img_src;
            //console.log(`img.src ${img.src}`);
            img.onload = () => 
            {
                ctx.drawImage(img, i*50, j*50, 50, 50);
            }
        }
    }
}

let rows=32;
let columns=32;
shared_functions.start_collecting_data();
let pokemon_list=[];
let c=document.getElementById("canvas");
let ctx=c.getContext("2d");
let checkin_interval=setInterval(check_closing_interval,1000);