import { httpClient as http } from '../plugins';

export const getPokemonById = (id: string | number) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	fetch(url).then(response => {
		response.json().then(pokemon => {
			console.log(pokemon.name);
		});
	});
};

export const getPokemonName = async (id: number | string): Promise<string> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokemon = await http.get(url);
	return pokemon.name;
};
