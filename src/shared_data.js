/*Easier scope than sharing promise functions*/

//https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
export const type_colors = {
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

export const color_hues=
{
	white:997,
	red:0,
	blue:240,
	yellow:60,
	green:120,
	black:999,
	brown:30,
	purple:270,
	gray:998,
	pink:315,
	"":-1,
	"BLANK":-1
}

export let national_pokedex_sizes=[151,251,386,493,649,721,809,905,1025,9999];
export let generations=["Kanto","Johto","Hoen","Sinnoh","Unova","Kalos","Alola","Galar","Paldea","Other Forms"];

export const pokemon_colors=[
    "green",
    "green",
    "green",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "white",
    "brown",
    "yellow",
    "yellow",
    "brown",
    "brown",
    "brown",
    "purple",
    "brown",
    "brown",
    "brown",
    "purple",
    "purple",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "blue",
    "blue",
    "blue",
    "purple",
    "purple",
    "purple",
    "pink",
    "pink",
    "brown",
    "yellow",
    "pink",
    "pink",
    "purple",
    "purple",
    "blue",
    "blue",
    "red",
    "red",
    "red",
    "purple",
    "purple",
    "brown",
    "brown",
    "yellow",
    "yellow",
    "yellow",
    "blue",
    "brown",
    "brown",
    "brown",
    "brown",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "brown",
    "gray",
    "gray",
    "gray",
    "green",
    "green",
    "green",
    "blue",
    "blue",
    "brown",
    "brown",
    "brown",
    "yellow",
    "yellow",
    "pink",
    "pink",
    "gray",
    "gray",
    "brown",
    "brown",
    "brown",
    "white",
    "white",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "gray",
    "yellow",
    "yellow",
    "red",
    "red",
    "red",
    "red",
    "pink",
    "yellow",
    "brown",
    "brown",
    "brown",
    "brown",
    "pink",
    "purple",
    "purple",
    "gray",
    "gray",
    "pink",
    "blue",
    "brown",
    "blue",
    "blue",
    "red",
    "red",
    "brown",
    "purple",
    "pink",
    "green",
    "red",
    "yellow",
    "red",
    "brown",
    "brown",
    "red",
    "blue",
    "blue",
    "purple",
    "brown",
    "blue",
    "yellow",
    "red",
    "pink",
    "blue",
    "blue",
    "brown",
    "brown",
    "purple",
    "black",
    "blue",
    "yellow",
    "yellow",
    "blue",
    "blue",
    "brown",
    "purple",
    "pink",
    "green",
    "green",
    "green",
    "yellow",
    "yellow",
    "yellow",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "brown",
    "brown",
    "red",
    "red",
    "green",
    "red",
    "purple",
    "blue",
    "blue",
    "yellow",
    "pink",
    "pink",
    "white",
    "white",
    "green",
    "green",
    "white",
    "pink",
    "yellow",
    "green",
    "blue",
    "blue",
    "brown",
    "green",
    "pink",
    "green",
    "blue",
    "purple",
    "yellow",
    "yellow",
    "red",
    "blue",
    "blue",
    "purple",
    "black",
    "black",
    "pink",
    "gray",
    "black",
    "blue",
    "yellow",
    "gray",
    "purple",
    "yellow",
    "purple",
    "gray",
    "pink",
    "purple",
    "gray",
    "red",
    "yellow",
    "blue",
    "black",
    "brown",
    "brown",
    "red",
    "red",
    "brown",
    "brown",
    "pink",
    "gray",
    "red",
    "red",
    "purple",
    "gray",
    "black",
    "black",
    "blue",
    "blue",
    "gray",
    "red",
    "brown",
    "white",
    "purple",
    "brown",
    "pink",
    "yellow",
    "red",
    "pink",
    "pink",
    "yellow",
    "brown",
    "blue",
    "green",
    "gray",
    "green",
    "white",
    "red",
    "green",
    "green",
    "green",
    "green",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "gray",
    "gray",
    "brown",
    "white",
    "red",
    "white",
    "yellow",
    "purple",
    "green",
    "green",
    "green",
    "green",
    "brown",
    "brown",
    "brown",
    "blue",
    "blue",
    "white",
    "yellow",
    "white",
    "white",
    "white",
    "blue",
    "blue",
    "brown",
    "green",
    "brown",
    "white",
    "brown",
    "gray",
    "yellow",
    "brown",
    "pink",
    "blue",
    "blue",
    "yellow",
    "brown",
    "blue",
    "gray",
    "pink",
    "purple",
    "purple",
    "black",
    "gray",
    "gray",
    "gray",
    "blue",
    "red",
    "green",
    "yellow",
    "yellow",
    "yellow",
    "gray",
    "purple",
    "green",
    "green",
    "purple",
    "red",
    "blue",
    "blue",
    "blue",
    "yellow",
    "red",
    "brown",
    "black",
    "purple",
    "brown",
    "brown",
    "green",
    "green",
    "green",
    "green",
    "blue",
    "blue",
    "white",
    "black",
    "yellow",
    "red",
    "gray",
    "blue",
    "red",
    "red",
    "brown",
    "black",
    "purple",
    "green",
    "gray",
    "gray",
    "brown",
    "pink",
    "gray",
    "green",
    "black",
    "black",
    "black",
    "black",
    "green",
    "blue",
    "white",
    "blue",
    "gray",
    "gray",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "pink",
    "gray",
    "pink",
    "blue",
    "white",
    "blue",
    "blue",
    "blue",
    "blue",
    "brown",
    "blue",
    "gray",
    "red",
    "blue",
    "blue",
    "red",
    "green",
    "yellow",
    "red",
    "green",
    "green",
    "green",
    "brown",
    "brown",
    "brown",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
    "gray",
    "gray",
    "green",
    "green",
    "yellow",
    "yellow",
    "yellow",
    "white",
    "brown",
    "brown",
    "pink",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "purple",
    "brown",
    "brown",
    "purple",
    "black",
    "gray",
    "gray",
    "yellow",
    "purple",
    "purple",
    "green",
    "green",
    "brown",
    "pink",
    "pink",
    "black",
    "purple",
    "blue",
    "blue",
    "blue",
    "black",
    "blue",
    "blue",
    "brown",
    "brown",
    "purple",
    "purple",
    "blue",
    "blue",
    "green",
    "blue",
    "blue",
    "blue",
    "white",
    "white",
    "black",
    "gray",
    "pink",
    "gray",
    "blue",
    "yellow",
    "red",
    "white",
    "green",
    "green",
    "blue",
    "purple",
    "brown",
    "red",
    "white",
    "gray",
    "black",
    "white",
    "red",
    "yellow",
    "pink",
    "blue",
    "white",
    "purple",
    "brown",
    "white",
    "black",
    "yellow",
    "blue",
    "blue",
    "black",
    "green",
    "white",
    "yellow",
    "green",
    "green",
    "green",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "brown",
    "gray",
    "gray",
    "purple",
    "purple",
    "green",
    "green",
    "red",
    "red",
    "blue",
    "blue",
    "pink",
    "pink",
    "gray",
    "gray",
    "gray",
    "black",
    "black",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "gray",
    "gray",
    "pink",
    "gray",
    "gray",
    "brown",
    "blue",
    "blue",
    "blue",
    "red",
    "blue",
    "yellow",
    "green",
    "yellow",
    "red",
    "gray",
    "red",
    "green",
    "green",
    "green",
    "green",
    "green",
    "brown",
    "brown",
    "red",
    "red",
    "red",
    "green",
    "red",
    "red",
    "yellow",
    "red",
    "black",
    "black",
    "yellow",
    "blue",
    "blue",
    "yellow",
    "yellow",
    "green",
    "green",
    "gray",
    "gray",
    "gray",
    "gray",
    "purple",
    "purple",
    "purple",
    "green",
    "green",
    "green",
    "blue",
    "white",
    "white",
    "white",
    "white",
    "pink",
    "brown",
    "white",
    "blue",
    "gray",
    "white",
    "white",
    "white",
    "white",
    "pink",
    "yellow",
    "yellow",
    "gray",
    "gray",
    "gray",
    "gray",
    "gray",
    "white",
    "blue",
    "blue",
    "blue",
    "brown",
    "white",
    "black",
    "black",
    "green",
    "green",
    "yellow",
    "white",
    "white",
    "blue",
    "red",
    "red",
    "brown",
    "yellow",
    "purple",
    "red",
    "green",
    "green",
    "red",
    "red",
    "brown",
    "white",
    "red",
    "brown",
    "brown",
    "red",
    "gray",
    "blue",
    "blue",
    "blue",
    "white",
    "white",
    "blue",
    "gray",
    "green",
    "green",
    "blue",
    "white",
    "black",
    "brown",
    "gray",
    "yellow",
    "white",
    "purple",
    "green",
    "green",
    "green",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "red",
    "red",
    "red",
    "black",
    "black",
    "white",
    "brown",
    "brown",
    "white",
    "white",
    "white",
    "brown",
    "brown",
    "white",
    "white",
    "white",
    "gray",
    "blue",
    "brown",
    "brown",
    "brown",
    "pink",
    "pink",
    "white",
    "white",
    "blue",
    "blue",
    "brown",
    "brown",
    "brown",
    "brown",
    "blue",
    "blue",
    "yellow",
    "yellow",
    "brown",
    "red",
    "blue",
    "blue",
    "pink",
    "green",
    "yellow",
    "gray",
    "purple",
    "purple",
    "purple",
    "gray",
    "brown",
    "brown",
    "brown",
    "brown",
    "blue",
    "blue",
    "purple",
    "purple",
    "blue",
    "red",
    "green",
    "pink",
    "purple",
    "brown",
    "brown",
    "brown",
    "brown",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "black",
    "black",
    "black",
    "brown",
    "brown",
    "gray",
    "green",
    "blue",
    "purple",
    "white",
    "red",
    "yellow",
    "yellow",
    "brown",
    "brown",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "green",
    "green",
    "pink",
    "pink",
    "purple",
    "purple",
    "black",
    "black",
    "pink",
    "pink",
    "purple",
    "purple",
    "purple",
    "green",
    "white",
    "white",
    "gray",
    "gray",
    "brown",
    "brown",
    "black",
    "gray",
    "gray",
    "brown",
    "blue",
    "red",
    "gray",
    "yellow",
    "pink",
    "white",
    "green",
    "gray",
    "gray",
    "gray",
    "yellow",
    "pink",
    "red",
    "purple",
    "blue",
    "blue",
    "white",
    "purple",
    "white",
    "red",
    "white",
    "black",
    "green",
    "white",
    "black",
    "black",
    "gray",
    "gray",
    "purple",
    "purple",
    "gray",
    "white",
    "yellow",
    "gray",
    "gray",
    "green",
    "green",
    "green",
    "white",
    "gray",
    "white",
    "blue",
    "blue",
    "blue",
    "brown",
    "brown",
    "blue",
    "blue",
    "purple",
    "blue",
    "yellow",
    "red",
    "brown",
    "brown",
    "green",
    "green",
    "white",
    "white",
    "green",
    "green",
    "yellow",
    "yellow",
    "black",
    "black",
    "black",
    "green",
    "green",
    "green",
    "green",
    "green",
    "blue",
    "brown",
    "brown",
    "purple",
    "purple",
    "red",
    "red",
    "brown",
    "blue",
    "purple",
    "purple",
    "pink",
    "pink",
    "pink",
    "pink",
    "pink",
    "purple",
    "gray",
    "brown",
    "white",
    "white",
    "purple",
    "gray",
    "white",
    "white",
    "yellow",
    "purple",
    "white",
    "white",
    "gray",
    "blue",
    "purple",
    "yellow",
    "yellow",
    "green",
    "green",
    "blue",
    "green",
    "blue",
    "white",
    "green",
    "green",
    "green",
    "blue",
    "red",
    "purple",
    "gray",
    "gray",
    "green",
    "yellow",
    "green",
    "white",
    "black",
    "green",
    "gray",
    "brown",
    "brown",
    "green",
    "gray",
    "black",
    "pink",
    "green",
    "green",
    "green",
    "red",
    "red",
    "red",
    "white",
    "blue",
    "blue",
    "gray",
    "gray",
    "white",
    "green",
    "gray",
    "gray",
    "yellow",
    "yellow",
    "yellow",
    "white",
    "white",
    "yellow",
    "brown",
    "green",
    "green",
    "green",
    "green",
    "brown",
    "brown",
    "brown",
    "red",
    "red",
    "blue",
    "yellow",
    "green",
    "black",
    "yellow",
    "brown",
    "gray",
    "gray",
    "gray",
    "brown",
    "brown",
    "yellow",
    "black",
    "red",
    "green",
    "green",
    "brown",
    "green",
    "yellow",
    "yellow",
    "pink",
    "pink",
    "pink",
    "white",
    "red",
    "white",
    "blue",
    "blue",
    "gray",
    "gray",
    "green",
    "pink",
    "blue",
    "blue",
    "white",
    "white",
    "pink",
    "white",
    "white",
    "gray",
    "blue",
    "pink",
    "gray",
    "brown",
    "brown",
    "yellow",
    "black",
    "purple",
    "pink",
    "gray",
    "gray",
    "red",
    "gray",
    "gray",
    "red",
    "gray",
    "blue",
    "yellow",
    "green",
    "gray",
    "gray",
    "gray",
    "brown",
    "yellow",
    "brown",
    "white",
    "brown",
    "red",
    "green",
    "white",
    "red",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
    "black",
    "black",
    "black",
    "green",
    "white",
    "green",
    "brown",
    "yellow",
    "gray",
    "blue",
    "blue",
    "purple",
    "red",
    "red",
    "red",
    "green",
    "green",
    "green",
    "black",
    "red",
    "red",
    "red",
    "red",
    "red",
    "gray",
    "gray",
    "gray",
    "green",
    "red",
    "white",
    "green",
    "blue",
    "brown",
    "gray",
    "gray",
    "yellow",
    "blue",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "green",
    "red",
    "red",
    "blue",
    "brown",
    "purple",
    "brown",
    "brown",
    "blue",
    "purple",
    "purple",
    "purple",
    "yellow",
    "red",
    "blue",
    "black",
    "green",
    "red",
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "black",
    "white",
    "blue",
    "blue",
    "white",
    "white",
    "red",
    "blue",
    "blue",
    "green",
    "purple",
    "blue",
    "white",
    "pink",
    "blue",
    "pink",
    "gray",
    "brown",
    "gray",
    "pink",
    "blue",
    "blue",
    "red",
    "green",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "purple",
    "red",
    "brown",
    "blue",
    "yellow",
    "purple",
    "brown",
    "brown",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "brown",
    "yellow",
    "brown",
    "brown",
    "yellow",
    "yellow",
    "brown",
    "brown",
    "brown",
    "purple",
    "purple",
    "yellow",
    "brown",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "brown",
    "blue",
    "red",
    "red",
    "red",
    "brown",
    "blue",
    "pink",
    "black",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "brown",
    "yellow",
    "yellow",
    "yellow",
    "gray",
    "gray",
    "yellow",
    "brown",
    "yellow",
    "brown",
    "brown",
    "green",
    "gray",
    "black",
    "black",
    "black",
    "yellow",
    "brown",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "pink",
    "pink",
    "brown",
    "purple",
    "pink",
    "blue",
    "yellow",
    "yellow",
    "pink",
    "pink",
    "brown",
    "white",
    "red",
    "red",
    "red",
    "black",
    "brown",
    "green",
    "blue",
    "blue",
    "purple",
    "blue",
    "purple",
    "yellow",
    "blue",
    "red",
    "purple",
    "gray",
    "green",
    "green",
    "green",
    "green",
    "red",
    "blue",
    "white",
    "yellow",
    "yellow",
    "gray",
    "purple",
    "red",
    "blue",
    "brown",
    "black",
    "green",
    "gray",
    "green",
    "white",
    "blue",
    "purple",
    "red",
    "green",
    "black",
    "green",
    "green",
    "green",
    "purple",
    "red",
    "pink",
    "purple",
    "white",
    "green",
    "white",
    "gray",
    "gray",
    "purple",
    "brown",
    "brown",
    "red",
    "red",
    "yellow",
    "gray",
    "black",
    "blue",
    "green",
    "gray",
    "gray",
    "red",
    "purple",
    "purple",
    "blue",
    "brown",
    "white",
    "purple",
    "green",
    "green",
    "pink",
    "brown",
    "brown",
    "brown",
    "blue",
    "gray",
    "yellow",
    "blue",
    "white",
    "pink",
    "pink",
    "green",
    "green",
    "green",
    "brown",
    "red",
    "red",
    "red",
    "red",
    "blue",
    "blue",
    "blue",
    "blue",
    "brown",
    "green",
    "green",
    "green",
    "blue",
    "blue"
];