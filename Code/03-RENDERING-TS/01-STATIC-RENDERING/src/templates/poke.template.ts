import { PokemonInfo } from "../interfaces/Pokemon/GetPokemon/PokemonInfo";

export const generatePokeHTML = (title: string, pokemons: PokemonInfo[]) => 
{

    // let pokeList: string = '';

    // pokemons.forEach( pokemon => {
    //     pokeList += `<li> <h2> ${pokemon.name} </h2> <p> ${pokemon.url} </p> </li>`;
    // });

    const pokeList: string = pokemons.map(pokemon => `
        <li>
            <h2> ${pokemon.name} </h2>
            <p> ${pokemon.url} </p>
        </li>
    `).join('\n');

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <ul>
                ${pokeList}
            </ul>
        </body>
        </html>
    `;

}